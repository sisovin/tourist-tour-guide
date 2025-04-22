import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../../../src/users/users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../../../src/users/user.entity';
import { Repository } from 'typeorm';

describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const users = [{ id: '1', username: 'test' }];
      jest.spyOn(repository, 'find').mockResolvedValue(users as User[]);

      expect(await service.findAll()).toBe(users);
    });
  });

  describe('findOne', () => {
    it('should return a single user', async () => {
      const user = { id: '1', username: 'test' };
      jest.spyOn(repository, 'findOne').mockResolvedValue(user as User);

      expect(await service.findOne('1')).toBe(user);
    });
  });

  describe('remove', () => {
    it('should remove a user', async () => {
      jest.spyOn(repository, 'delete').mockResolvedValue(undefined);

      expect(await service.remove('1')).toBeUndefined();
    });
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const user = { id: '1', username: 'test' };
      jest.spyOn(repository, 'save').mockResolvedValue(user as User);

      expect(await service.create(user as User)).toBe(user);
    });
  });
});
