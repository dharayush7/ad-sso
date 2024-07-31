export interface UserInt {
  valided: boolean;
  firstName: string;
  lastName: string;
  email: string;
}

export interface VerifyUserInt {
  error: boolean;
  parmanentToken: string;
}
