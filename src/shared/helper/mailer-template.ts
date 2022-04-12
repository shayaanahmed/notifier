import { getMailerConfiguration } from './configuration';
import {
  MAIL_PROVIDER,
  MAIL_PROVIDER_CONFIG,
  MAIL_PROVIDER_TYPE,
} from './types';
import { SendGridMailer } from '../third-party/mailer/send-grid';
import { SampleMailer } from '../third-party/mailer/sample-provider';

export function getEmailProviders(config: any): MAIL_PROVIDER_CONFIG[] {
  const EMAIL_PROVIDERS: MAIL_PROVIDER_CONFIG[] = [
    {
      provider: MAIL_PROVIDER.SEND_GRID,
      instance: SendGridMailer.getInstance(
        getMailerConfiguration(config, MAIL_PROVIDER.SEND_GRID),
      ),
      type: MAIL_PROVIDER_TYPE.DEFAULT,
      priority: 0,
    },
    {
      provider: MAIL_PROVIDER.SAMPLE,
      instance: SampleMailer.getInstance(
        getMailerConfiguration(config, MAIL_PROVIDER.SAMPLE),
      ),
      type: MAIL_PROVIDER_TYPE.FALLBACK,
      priority: 1,
    },
  ];
  return EMAIL_PROVIDERS;
}
