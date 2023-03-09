import validate from '@/middleware/validation.middleware';
import UserService from '@/services/user.service';
import { ApiResponse } from '@/types';
import { userCreateRules } from '@/validators/user.validator';
import { Request, Response } from 'express';
import { Controller, Get, Param, Post, Req, Res, UseBefore } from 'routing-controllers';
import UserRepository from '@/repositories/user.repository';
import { Service } from 'typedi';

@Service()
@Controller()
export class UserController {
  constructor(public service: UserService, public repository: UserRepository) {}

  @Post('/users')
  @UseBefore(validate(userCreateRules))
  async create(@Req() req: Request, @Res() res: Response<ApiResponse>): Promise<Response<ApiResponse>> {
    const user = await this.service.create(req);
    return res.status(201).send({ message: 'User created successfully.', data: user });
  }

  @Get('/users/:id')
  async fetch(@Param('id') id: number, @Res() res: Response<ApiResponse>) {
    const user = await this.repository.findOne({ id });
    if (user === null) {
      return res.status(404).send({ message: 'User not found.' });
    }
    return res.status(200).send({ message: 'User found.', data: user });
  }
}
