import { Injectable } from '@nestjs/common';
import { NotifierEvent } from '../shared/notifier-event.service';
import { NotifierDTO } from './dto/notifier.dto';

@Injectable()
export class NotifierService {
  constructor(private readonly notiEvent: NotifierEvent) {}

  async notify(notifierDto: NotifierDTO): Promise<string> {
    this.notiEvent.emitEvent('app.notify', notifierDto);
    return 'Notification event generated successfully!';
  }
}
