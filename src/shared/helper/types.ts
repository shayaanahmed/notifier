import { Mailer } from '../third-party/mailer/mailer';
import { MAIL_PROVIDER, MAIL_PROVIDER_TYPE } from '../helper';

export interface EMAIL_PAYLOAD {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}
export interface MAIL_PROVIDER_CONFIG {
  provider: MAIL_PROVIDER;
  instance: Mailer;
  type: MAIL_PROVIDER_TYPE;
  priority: number;
}
