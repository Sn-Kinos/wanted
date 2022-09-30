import { IsNumberString } from 'class-validator';

export class ParamsValidator {
  @IsNumberString()
  id: number;
}
