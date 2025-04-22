import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { AuthService } from '../../../src/auth/auth.service';
import { UsersService } from '../../../src/users/users.service';

describe('AuthController (e2e)', () => {
  let app: INestApplication;
  let authService = { login: () => ({ access_token: 'test' }) };
  let usersService = { create: () => ({ id: 1, username: 'test' }) };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(AuthService)
      .useValue(authService)
      .overrideProvider(UsersService)
      .useValue(usersService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'test', password: 'test' })
      .expect(201)
      .expect({
        access_token: 'test',
      });
  });

  it('/auth/register (POST)', () => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send({ username: 'test', password: 'test' })
      .expect(201)
      .expect({
        id: 1,
        username: 'test',
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
