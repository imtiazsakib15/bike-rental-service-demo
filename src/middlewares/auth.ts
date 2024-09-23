import jwt, { JwtPayload } from 'jsonwebtoken';
import { catchAsync } from '../utils/catchAsync';
import config from '../config';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import User from '../modules/user/user.model';
import { USER_ROLE } from '../modules/user/user.constant';

export const auth = (
  ...checkedRoles: (typeof USER_ROLE)[keyof typeof USER_ROLE][]
) => {
  return catchAsync(async (req, res, next) => {
    const accessToken = req.headers?.authorization?.split(' ')[1];
    if (!accessToken)
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'You have no access to this route',
      );

    // Verify access token signature and decode payload
    const decodedUser = jwt.verify(
      accessToken as string,
      config.ACCESS_TOKEN_SECRET as string,
    ) as JwtPayload;

    if (!decodedUser)
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'You have no access to this route',
      );

    const user = await User.findOne({ email: decodedUser.email });
    if (!user)
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'You have no access to this route',
      );

    if (!checkedRoles.includes(user.role) || user.role !== decodedUser.role)
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'You have no access to this route',
      );

    next();
  });
};
