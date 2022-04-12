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
