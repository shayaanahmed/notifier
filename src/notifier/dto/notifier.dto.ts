import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { MESSAGE_TYPE } from '../../shared/helper';

export class NotifierDTO {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  recipient: string;

  @IsNotEmpty()
  @IsEnum(MESSAGE_TYPE)
  messageType: MESSAGE_TYPE;
}
