import { Injectable } from '@nestjs/common';
import {
  EMAIL_PAYLOAD,
  MAIL_PROVIDER_CONFIG,
  MAIL_PROVIDER_TYPE,
  getEmailProviders,
} from './helper';
import { Mailer } from './third-party/mailer/mailer';
import logger from './helper/logger';

@Injectable()
export class EmailNotifierService {
  provider: MAIL_PROVIDER_CONFIG;
  fallbackProvider: MAIL_PROVIDER_CONFIG;
  client: Mailer;

  constructor() {
    this.setProviders();
  }

  setProviders() {
    getEmailProviders(process.env).forEach((item) => {
      if (item.type === MAIL_PROVIDER_TYPE.DEFAULT) {
        this.provider = item;
      } else {
        this.fallbackProvider = item;
      }
    });
  }

  async notify(emailPayload: EMAIL_PAYLOAD) {
    logger.info('Sending an email using default provider');
    const isSent = await this.provider.instance.sendEmail(emailPayload);
    if (isSent) {
      logger.info('Email sent successfuly using default provider');
      return isSent;
    } else {
      logger.info('Sending an email using fallback provider');
      const isMailSent = await this.fallbackProvider.instance.sendEmail(
        emailPayload,
      );
      if (isMailSent) {
        logger.info('Email sent successfuly using fallback provider');
        return isMailSent;
      } else {
        logger.error('Error while sending sending email as fallback provider');
      }
    }
  }
}
