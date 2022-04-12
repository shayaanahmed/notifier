export enum NOTIFIER_TYPE {
  EMAIL = 'EMAIL',
}

export enum MAIL_PROVIDER {
  SEND_GRID = 'sendgrid',
  SAMPLE = 'sample',
}

export enum MAIL_PROVIDER_TYPE {
  DEFAULT = 'default',
  FALLBACK = 'fallback',
}

export enum MESSAGE_TYPE {
  WELCOME = 'welcomeMessage',
  EMERGENCY = 'emergencyMessage',
}

export enum HHTP_STATUS_CODES {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  CREATED = 201,
  INTER_SERVER_ERROR = 500,
}
