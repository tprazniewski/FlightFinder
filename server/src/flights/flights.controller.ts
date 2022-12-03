import { Param, Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GetFlightDto } from './dto/get-flight-dto';
import { Flight } from './flight.entity';

@Controller('flights')
export class FlightsController {
  @Get()
  getFlights(@Query() getFlightDto: GetFlightDto): Promise<Flight[]> {
    return;
  }
}
