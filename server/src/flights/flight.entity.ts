import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FlightDocument = Flight & Document;

@Schema()
export class Flight {
  @Prop(String)
  flight_id: string;

  @Prop(String)
  depatureDestination: string;

  @Prop(String)
  arrivalDestination: string;

  @Prop()
  itineraries: [
    {
      depatureAt: string;
      arriveAt: string;
      avaliableSeats: number;
      prices: [
        {
          currency: string;
          adult: number;
          child: number;
        },
      ];
    },
  ];
}

export const FlightSchema = SchemaFactory.createForClass(Flight);
