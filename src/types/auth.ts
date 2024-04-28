export type SignInDto = {
    fullName: string;
  } & SignUpDto;
  
  export type SignUpDto = {
    email: string;
    password: string;
  };