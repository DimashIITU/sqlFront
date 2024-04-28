import * as yup from 'yup';

export const userSchema = yup.object().shape({
    email: yup.string().email('неверный формат почты').required('Пота обязательна'),
    password: yup
      .string()
      .min(6, 'Пароль должен быть минимум 6 символов')
      .required('Пароль обязательный'),
  });