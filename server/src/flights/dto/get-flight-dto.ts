import {
  IsNotEmpty,
  IsDateString,
  IsString,
  IsBoolean,
  IsNumber,
} from 'class-validator';

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
  isOneWay: boolean;

  adult: number;

  child: number;

  infants: number;
}
