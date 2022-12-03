import { Param, Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GetFlightDto } from './dto/get-flight-dto';
import { Flight } from './flight.entity';

@Controller('flights')
export class FlightsController {
  @Get()
  getFlights(@Query() getFlightDto: GetFlightDto): any {
    // getFlights(@Query() getFlightDto: GetFlightDto): Promise<Flight[]> {
    console.log('weszlo w get');
    console.log('getFlightDto:', getFlightDto);
    return { data: ' this is a message' };
  }
  @Post()
  postFlights(@Query() getFlightDto: GetFlightDto): Promise<Flight[]> {
    console.log('weszlo w post');
    return;
  }
}
