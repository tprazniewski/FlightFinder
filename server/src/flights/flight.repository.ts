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
    const sumOfPlaces = Number(adult) + Number(child) + Number(infants);

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
            $gte: sumOfPlaces,
          },
          'itineraries.depatureAt': {
            $gte: depatureAt,
          },
          'itineraries.arriveAt': {
            $lte: arriveAt,
          },
        },
      },
    ]);
    // console.log(a);
    return a;
  }
}
