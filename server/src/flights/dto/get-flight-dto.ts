import { IsNotEmpty } from 'class-validator';

export class GetFlightDto {
  @IsNotEmpty()
  depatureDestination: string;

  @IsNotEmpty()
  arrivalDestination: string;

  @IsNotEmpty()
  depatureAt: string;

  @IsNotEmpty()
  arriveAt: string;
}
