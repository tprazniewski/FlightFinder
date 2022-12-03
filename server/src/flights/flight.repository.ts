import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Flight, FlightDocument } from './flight.entity';
import { Model } from 'mongoose';
import { GetFlightDto } from '../flights/dto/get-flight-dto';

@Injectable()
export class FlightRepository {
  constructor(
    @InjectModel(Flight.name) private flightModel: Model<FlightDocument>,
  ) {}
  getFlightsByFilter(getFlightDto: GetFlightDto) {
    const { depatureDestination, arrivalDestination, depatureAt, arriveAt } =
      getFlightDto;
    return this.flightModel.find();
  }
}
