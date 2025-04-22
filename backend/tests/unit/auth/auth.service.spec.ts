import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../../../src/auth/auth.service';
import { UsersService } from '../../../src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../../src/users/user.entity';

describe('AuthService', () => {
  let service: AuthService;
  let usersService: UsersService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: {
            findOne: jest.fn(),
            create: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateUser', () => {
    it('should return user data without password if validation is successful', async () => {
      const user = { username: 'test', password: 'test' } as User;
      jest.spyOn(usersService, 'findOne').mockResolvedValue(user);

      const result = await service.validateUser('test', 'test');
      expect(result).toEqual({ username: 'test' });
    });

    it('should return null if validation fails', async () => {
      jest.spyOn(usersService, 'findOne').mockResolvedValue(null);

      const result = await service.validateUser('test', 'test');
      expect(result).toBeNull();
    });
  });

  describe('login', () => {
    it('should return an access token', async () => {
      const user = { username: 'test', userId: 1 };
      jest.spyOn(jwtService, 'sign').mockReturnValue('token');

      const result = await service.login(user);
      expect(result).toEqual({ access_token: 'token' });
    });
  });

  describe('register', () => {
    it('should create a new user', async () => {
      const user = { username: 'test', password: 'test' } as User;
      jest.spyOn(usersService, 'create').mockResolvedValue(user);

      const result = await service.register(user);
      expect(result).toEqual(user);
    });
  });
});
