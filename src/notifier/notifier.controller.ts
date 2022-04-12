import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { NotifierDTO } from './dto/notifier.dto';
import { NotifierService } from './notifier.service';

@Controller('notifier')
export class NotifierController {
  constructor(private readonly notifierService: NotifierService) {}

  @Throttle(30, 60)
  @HttpCode(200)
  @Post()
  async notify(@Body() notifierDto: NotifierDTO): Promise<string> {
    return this.notifierService.notify(notifierDto);
  }
}
