export interface User {
  kindeId: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface AuthUser {
  kindeId: string;
  email: string;
  firstName: string;
  lastName: string;
  tempToken: string;
}

export interface Invalid {
  action: boolean;
}
