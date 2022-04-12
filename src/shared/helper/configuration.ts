import { MAIL_PROVIDER } from './types';

export function getMailerConfiguration(config: any, provider: MAIL_PROVIDER) {
  const configuration: any = {};
  switch (provider) {
    case MAIL_PROVIDER.SEND_GRID:
      configuration.apiKey = config.API_KEY_SEND_GRID || '';
      configuration.sender = config.SENDER_SENG_GRID || '';
      break;
  }
  return configuration;
}
