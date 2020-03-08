import { ClientOptions, Transport } from '@nestjs/microservices';
import { resolve } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'scraper', // ['hero', 'hero2']
    protoPath: resolve('protos/scraper.proto'), // ['./hero/hero.proto', './hero/hero2.proto']
  },
};