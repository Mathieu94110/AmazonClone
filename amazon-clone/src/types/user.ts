export type UserInfo = {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
};
export type googleToken = {
  accessToken: string;
  expiresIn: string;
  issuedAt: number;
  scope: string;
  state: string;
  tokenType: "Bearer";
};
