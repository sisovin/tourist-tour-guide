import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { UsersService } from '../../../src/users/users.service';
import { CreateUserDto } from '../../../src/users/dto/create-user.dto';

describe('UsersController (e2e)', () => {
  let app: INestApplication;
  let usersService = {
    create: (dto: CreateUserDto) => ({ id: 1, ...dto }),
    findAll: () => [{ id: 1, username: 'test' }],
    findOne: (id: string) => ({ id, username: 'test' }),
    remove: (id: string) => undefined,
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(UsersService)
      .useValue(usersService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/users (POST)', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({ username: 'test' })
      .expect(201)
      .expect({
        id: 1,
        username: 'test',
      });
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect([
        {
          id: 1,
          username: 'test',
        },
      ]);
  });

  it('/users/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/users/1')
      .expect(200)
      .expect({
        id: 1,
        username: 'test',
      });
  });

  it('/users/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/users/1')
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
