import { EMAIL_PAYLOAD } from '../../../shared/helper';

export abstract class Mailer {
  abstract configureClient(apiKey: string);
  abstract sendEmail(emailPayload: EMAIL_PAYLOAD);
}
