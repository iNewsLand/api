import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import IScraperService from './scraper.interface'
import { ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class ScraperService implements OnModuleInit {
  private scraperService: IScraperService;
  constructor(@Inject('SCRAPER_SERVICE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.scraperService = this.client.getService<IScraperService>('ScraperService');
  }

  @GrpcMethod('ScraperService')
  getProjects(): Observable<any> {
    return this.scraperService.getProjects({});
  }
}
