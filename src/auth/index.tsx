import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./forms.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import { FormField } from "../shared/FormField";
import { setCookie } from "nookies";
import { UserApi } from "../../utils/api/user";
import { SignUpDto } from "../types/auth";
import { Api } from "../../utils/api";
import { Alert, Button } from "@mui/material";
import { auth } from "./auth";
import { userSchema } from "../shemas/login";

interface ILoginProps {
  onClickRegister: () => void;
}

export const Login = () => {
  const [errorState, setErrorState] = React.useState("");
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(userSchema),
  });
  const onSubmit = async (data: SignUpDto) => {
    try {
      const res = await Api().user.login(data);
      setCookie(null, "token", res.access_token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setErrorState("");
      auth();
    } catch (error) {
      setErrorState(error.response.data.message);
      console.warn(error);
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name={"email"} label={"Эл. почта"} />
        <FormField name={"password"} label={"Пароль"} />
        {errorState && (
          <Alert severity="error" className="mb-20">
            {errorState}
          </Alert>
        )}
        <div className={styles.signButtons}>
          <Button
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            type="submit"
            color="primary"
            variant="contained"
          >
            Войти
          </Button>
          <Button color="primary" variant="text">
            Регистрация
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
