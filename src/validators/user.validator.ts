import { body } from 'express-validator';
import UserRepository from '@/repositories/user.repository';

const userRepo = new UserRepository();

export const userCreateRules = [
  body('firstName', 'First name is required').exists(),
  body('lastName', 'Last name is required').exists(),
  body('email', 'Email is required')
    .exists()
    .bail()
    .isEmail()
    .withMessage('Invalid email')
    .bail()
    .custom(async (email) => {
      const user = await userRepo.findOne({ email });
      if (user !== null) {
        return Promise.reject('Email already exists.');
      }
    }),
];
