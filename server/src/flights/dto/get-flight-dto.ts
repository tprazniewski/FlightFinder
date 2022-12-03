import { IsNotEmpty, IsDateString } from 'class-validator';

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
}
