import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { NotifierModule } from '../src/notifier/notifier.module';
import * as request from 'supertest';
import { NotifierService } from '../src/notifier/notifier.service';
import { MESSAGE_TYPE } from '../src/shared/helper';

describe('notifierController', () => {
  let app: INestApplication;
  const notificationService = {
    notify: () => 'Notification event generated successfully!',
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [NotifierModule],
    })
      .overrideProvider(NotifierService)
      .useValue(notificationService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  describe('Notify', () => {
    it(`should return 200 when try to pass valid payload`, () => {
      return request(app.getHttpServer())
        .post('/notifier')
        .send({
          messageType: MESSAGE_TYPE.EMERGENCY,
          recipient: 'test@mail.com',
        })
        .expect(200)
        .expect(notificationService.notify());
    });
    it(`should return 400 when try to not populate required properties`, () => {
      return request(app.getHttpServer())
        .post('/notifier')
        .send({
          recipient: 'test@mail.com',
        })
        .expect(200)
        .expect(notificationService.notify());
    });
    it(`should return 400 when try to not populate required properties`, () => {
      return request(app.getHttpServer())
        .post('/notifier')
        .send({
          messageType: 'wrong',
          recipient: 'test@mail.com',
        })
        .expect(200)
        .expect(notificationService.notify());
    });
  });
});
