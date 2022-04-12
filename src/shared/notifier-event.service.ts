import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { EmailNotifierService } from './email-notifier.service';
import { EVENT_BASE_NOTIFIER, EMAIL_PAYLOAD } from './helper';

@Injectable()
export class NotifierEvent {
  constructor(
    private eventEmitter: EventEmitter2,
    private emailNotifierService: EmailNotifierService,
    private configService: ConfigService,
  ) {}

  emitEvent(event: string, payload: any) {
    const hash = this.configService.get('NOTIFIER_EVENT');
    this.eventEmitter.emit(event, { ...payload, hash });
  }

  @OnEvent('app.notify')
  listentToEvent(payload: any) {
    const messageHash = this.configService.get('NOTIFIER_EVENT');
    const { hash } = payload;
    if (messageHash === hash) {
      const template = EVENT_BASE_NOTIFIER[payload.messageType];
      const emailPayload: EMAIL_PAYLOAD = {
        to: payload.recipient,
        subject: template.subject,
        text: template.text,
      };

      this.emailNotifierService.notify(emailPayload);
    }
  }
}
