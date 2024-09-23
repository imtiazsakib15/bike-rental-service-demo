import bcrypt from 'bcrypt';
import AppError from '../../errors/AppError';
import config from '../../config';
import jwt, { JwtPayload } from 'jsonwebtoken';
import httpStatus from 'http-status';

export const isPasswordMatch = async (
  password: string,
  hashedPassword: string,
) => await bcrypt.compare(password, hashedPassword);

export const verifyToken = (token: string, tokenSecret: string) => {
  try {
    return jwt.verify(token, tokenSecret);
  } catch (error) {
    throw new AppError(httpStatus.UNAUTHORIZED, ' Unauthorized');
  }
};

export const decodeUserFromAccessToken = (token: string) =>
  verifyToken(token, config.ACCESS_TOKEN_SECRET as string) as JwtPayload;
