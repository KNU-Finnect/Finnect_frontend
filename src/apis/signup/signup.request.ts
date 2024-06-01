export interface SignupRequest {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface CheckEmailRequest {
  email: string;
  codeNumber: number;
}
