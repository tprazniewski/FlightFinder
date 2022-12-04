import { Injectable } from '@nestjs/common';
import { FlightRepository } from '../flights/flight.repository';
import { GetFlightDto } from '../flights/dto/get-flight-dto';

@Injectable()
export class FlightsService {
  constructor(private flightRepository: FlightRepository) {}

  getFlightsByFilter(getFlightDto: GetFlightDto) {
    return this.flightRepository.getFlightsByFilter(getFlightDto);
  }
}
