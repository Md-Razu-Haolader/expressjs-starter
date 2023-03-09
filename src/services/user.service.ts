import UserRepository from '@/repositories/user.repository';
import { User } from 'generated/prisma/pgsql-client';
import { Service } from 'typedi';
import { Request } from 'express';

@Service()
export default class UserService {
  constructor(public repository: UserRepository) {}

  async create(req: Request): Promise<User> {
    const user = await this.repository.save(req.body);
    // do other stuff like send email to the user and admin etc...
    return user;
  }
}
