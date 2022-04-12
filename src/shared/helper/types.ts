import { Mailer } from '../third-party/mailer/mailer';

export enum NOTIFIER_TYPE {
  EMAIL = 'EMAIL',
}

export interface EMAIL_PAYLOAD {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export enum MAIL_PROVIDER {
  SEND_GRID = 'sendgrid',
  SAMPLE = 'sample',
}

export enum MAIL_PROVIDER_TYPE {
  DEFAULT = 'default',
  FALLBACK = 'fallback',
}

export interface MAIL_PROVIDER_CONFIG {
  provider: MAIL_PROVIDER;
  instance: Mailer;
  type: MAIL_PROVIDER_TYPE;
  priority: number;
}

export enum MESSAGE_TYPE {
  WELCOME = 'welcomeMessage',
  EMERGENCY = 'emergencyMessage',
}
