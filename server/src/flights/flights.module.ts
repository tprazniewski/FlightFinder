import { Module } from '@nestjs/common';
import { FlightsController } from './flights.controller';
import { FlightsService } from './flights.service';
import { FlightRepository } from '../flights/flight.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Flight, FlightSchema } from '../flights/flight.entity';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Flight.name, schema: FlightSchema }]),
  ],
  controllers: [FlightsController],
  providers: [FlightsService, FlightRepository],
})
export class FlightsModule {}
