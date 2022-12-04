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
  async getFlightsByFilter(getFlightDto: GetFlightDto) {
    const {
      depatureDestination,
      arrivalDestination,
      depatureAt,
      arriveAt,
      isOneWay,
      adult,
      child,
      infants,
    } = getFlightDto;
    const a = await this.flightModel.aggregate([
      {
        $unwind: '$itineraries',
      },
      {
        $match: {
          depatureDestination,
          arrivalDestination,
        },
      },
      {
        $match: {
          'itineraries.avaliableSeats': {
            $gte: 50,
          },
        },
      },
    ]);
    // console.log(a);
    return a;
  }
}
