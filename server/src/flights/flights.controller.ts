import { Param, Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GetFlightDto } from './dto/get-flight-dto';
import { Flight } from './flight.entity';
import { FlightsService } from '../flights/flights.service';
@Controller('flights')
export class FlightsController {
  constructor(private flightService: FlightsService) {}

  @Get()
  getFlights(@Query() getFlightDto: GetFlightDto) {
    // getFlights(@Query() getFlightDto: GetFlightDto): Promise<Flight[]> {

    // return { data: ' this is a message' };
    return this.flightService.getFlightsByFilter(getFlightDto);
  }
  @Post()
  postFlights(@Query() getFlightDto: GetFlightDto): Promise<Flight[]> {
    return;
  }
}
