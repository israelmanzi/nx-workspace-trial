export type AuthResponse = AuthFailure | AuthSuccess;

export interface AuthFailure {
  success: false;
  error: string;
}

export interface AuthSuccess {
  success: true;
  token: string;
}

export function auth(): AuthResponse {
  return {
    success: true,
    token: 'token',
  };
}
