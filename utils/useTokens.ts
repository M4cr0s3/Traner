import jwt from "jsonwebtoken";
import type { ITokenPayload, IUseTokenOptions } from "~/types";

export const useTokens = (
  payload: ITokenPayload,
  secret: string,
  optionsAccessToken: IUseTokenOptions,
  optionsRefreshToken: IUseTokenOptions
) => {
  const generateAcccessToken = (
    payload: ITokenPayload,
    secret: string,
    optionsAccessToken: IUseTokenOptions
  ) => {
    return jwt.sign(payload, secret, optionsAccessToken);
  };
  const generateRefreshToken = (
    payload: ITokenPayload,
    secret: string,
    optionsRefreshToken: IUseTokenOptions
  ) => {
    return jwt.sign(payload, secret, optionsRefreshToken);
  };

  let accessToken = generateAcccessToken(payload, secret, optionsAccessToken);
  let refreshToken = generateRefreshToken(payload, secret, optionsRefreshToken);

  return { accessToken, refreshToken };
};
