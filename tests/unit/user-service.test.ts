import UserService from '@/services/user.service';
import UserRepository from '@/repositories/user.repository';
import { Request } from 'express';

// jest.setTimeout(300);

// beforeAll(async () => {});

// afterAll(async () => {});

afterEach(async () => {
  jest.clearAllMocks();
  jest.resetAllMocks();
  jest.restoreAllMocks();
});

const userService = new UserService(new UserRepository());

describe('User service', () => {
  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('User save', () => {
    describe('Give valid data', () => {
      it('Should save user', async () => {
        const requestData: Request['body'] = {
          body: {
            firstName: 'Jhon',
            lastName: 'doe',
            email: 'jhon@example.com',
          },
        };

        const result = await userService.create(requestData);
        expect(result).toBeDefined();
        expect(result).toMatchObject({
          firstName: 'Jhon',
          lastName: 'doe',
          email: 'jhon@example.com',
        });
      });
    });
  });
});
