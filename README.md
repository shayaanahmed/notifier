<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A email notifier system. Using this you can send email notifications with predefined templates.</p>
    <p align="center">

## Description

Email Notifier system.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## To add a new Service Provider
  To implement any new mailing provider, implement the logic for that provider inside `src/shared/thrid-party/mailer` by using this template.
  ```
  import { EMAIL_PAYLOAD } from '../../helper';
import { Mailer } from './mailer';

export class SampleMailer extends Mailer {
  private static instanceCount = 0;
  private static instance: SampleMailer;

  private constructor() {
    super();
  }

  static getInstance(config: any) {
    if (this.instanceCount === 0) {
      this.instanceCount = 1;
      this.instance = new SampleMailer();
    }
    return this.instance;
  }

  configureClient(apiKey: string) {
    // Configure your mail client here
  }

  async sendEmail(emailPayload: EMAIL_PAYLOAD) {
    // send mail here
    return true;
  }
}
```
  1-  Now you need to add the enumeration of the newly added mailing provider inside `src/shared/helper/enums.ts` under `MAIL_PROVIDER` enumeration.
  2-  Update the `src/shared/helper/mailer-template.ts` file as well to adjust the priority if this newly added service.
  3-  For the configuration of the newly added service, add the config inside relevant env file and then update this accordingly `src/shared/helper/configuration.ts`.
  
## To add a new Message Type
    1-  Add the newly added message type enumeration inside `src/shared/helper/enums.ts` under `MESSAGE_TYPE`.
    2-  Then update the `src/shared/helper/event-based-template.ts` file with the desired subject and other properties.
    
## Rate Throttle
To adjust or modify the request rate. Navigate to `src/notifier/notifier.controller.ts` and update value inside `@Throttle(3, 60)`. Where first parameter is the number of requests and second parameter is time.

## License

Nest is [MIT licensed](LICENSE).
