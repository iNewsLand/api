import { Module } from '@nestjs/common';
import { ScraperController } from './scraper.controller';
import { ScraperService } from './scraper.service'
import { grpcClientOptions } from '../grpc';
import { ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SCRAPER_SERVICE',
        ...grpcClientOptions,
      },
    ]),
  ],
  controllers: [ScraperController],
  providers: [ScraperService]
})
export class ScraperModule {}
