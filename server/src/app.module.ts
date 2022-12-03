import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsModule } from './flights/flights.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    FlightsModule,
    MongooseModule.forRoot(
      `mongodb://test:test@193.187.129.95:27017/?authMechanism=DEFAULT&authSource=test`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
