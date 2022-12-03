import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Flight, FlightDocument } from './flight.entity';
import { Model } from 'mongoose';

@Injectable()
export class FlightRepository {
  constructor(
    @InjectModel(Flight.name) private groupModel: Model<FlightDocument>,
  ) {}
}
