import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async healthy(): Promise<string> {
    return 'Server is healty and running!';
  }
}
