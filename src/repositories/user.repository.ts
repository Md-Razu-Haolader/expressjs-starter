import Repository from './repository';
import { Service } from 'typedi';
import { Prisma, User, PrismaClient } from 'generated/prisma/pgsql-client';
import { prisma } from '@/utils/prisma.db';

@Service()
export default class UserRepository implements Repository<User> {
  async save(body: Prisma.UserCreateInput): Promise<User | never> {
    return (await (prisma() as PrismaClient).user.create({
      data: body,
    })) as unknown as User;
  }

  async findOne(criteria: Prisma.UserWhereInput): Promise<User | null> {
    return await (prisma() as PrismaClient).user.findFirst({
      where: {
        ...criteria,
      },
    });
  }
}
