export interface UserInt {
  error: boolean;
  kindeId: string;
  email: string;
  firstName: string;
  lastName: string;
  tempToken: null | string;
  pamanentToken: string;
}

export interface VerifyAndAuthUserInt {
  error: boolean;
  parmanentToken: string;
}
