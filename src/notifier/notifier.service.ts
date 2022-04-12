import { BadRequestException, Injectable } from '@nestjs/common';
import logger from '../shared/helper/logger';
import { NotifierEvent } from '../shared/notifier-event.service';
import { NotifierDTO } from './dto/notifier.dto';

@Injectable()
export class NotifierService {
  constructor(private readonly notiEvent: NotifierEvent) {}

  async notify(notifierDto: NotifierDTO): Promise<string> {
    try {
      this.notiEvent.emitEvent('app.notify', notifierDto);
      return 'Notification event generated successfully!';
    } catch (ex) {
      logger.error(`Unable to generate event due to ${ex.message}`);
      throw new BadRequestException(ex.message);
    }
  }
}
