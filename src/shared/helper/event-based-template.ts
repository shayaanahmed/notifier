import { MESSAGE_TYPE } from './types';

export const EVENT_BASE_NOTIFIER = {
  [MESSAGE_TYPE.WELCOME]: {
    subject: 'Welcome OnBoard',
    text: `Hi $name, welcome onboard.`,
  },
  [MESSAGE_TYPE.EMERGENCY]: {
    subject: 'EMERGENCY!!!',
    text: `This is an emergency alert!`,
  },
};
