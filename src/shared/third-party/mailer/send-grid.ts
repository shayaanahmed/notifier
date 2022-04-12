import { MailService } from '@sendgrid/mail';
import logger from '../../../shared/helper/logger';
import { EMAIL_PAYLOAD } from '../../../shared/helper';
import { Mailer } from './mailer';

export class SendGridMailer extends Mailer {
  mailService: MailService;
  config: any;
  private static instanceCount = 0;
  private static instance: SendGridMailer;

  private constructor() {
    super();
  }

  static getInstance(config: any) {
    if (this.instanceCount === 0) {
      this.instanceCount = 1;
      this.instance = new SendGridMailer();
      this.instance.config = config;
      this.instance.configureClient(config.apiKey);
    }
    return this.instance;
  }

  configureClient(apiKey: string) {
    this.mailService = new MailService();
    this.mailService.setApiKey(apiKey);
  }

  async sendEmail(emailPayload: EMAIL_PAYLOAD) {
    try {
      return this.mailService.send({
        to: emailPayload.to,
        from: this.config.sender,
        subject: emailPayload.subject,
        text: emailPayload.text,
        html: emailPayload.html,
      });
    } catch (ex) {
      logger.error(`Error while sending an email due to ${ex.message}`);
    }
  }
}
