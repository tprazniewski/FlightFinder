import {
  IsNotEmpty,
  IsInt,
  IsDateString,
  IsString,
  IsBoolean,
  IsNumber,
  IsNumberString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class GetFlightDto {
  @IsNotEmpty()
  depatureDestination: string;

  @IsNotEmpty()
  arrivalDestination: string;

  @IsNotEmpty()
  @IsDateString()
  depatureAt: string;

  @IsNotEmpty()
  @IsDateString()
  arriveAt: string;

  @IsString()
  isOneWay: string;

  @Type(() => Number)
  @IsInt()
  adult: number;

  @Type(() => Number)
  @IsInt()
  child: number;

  @Type(() => Number)
  @IsInt()
  infants: number;
}
