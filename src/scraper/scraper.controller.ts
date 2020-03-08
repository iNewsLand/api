import { Controller, Get } from '@nestjs/common';
import { ScraperService } from './scraper.service'
import { Observable } from 'rxjs';

@Controller('scraper')
export class ScraperController {
  constructor(private readonly scraperService: ScraperService) {}

  @Get('projects')
  listProjects(): Observable<any> {
    return this.scraperService.getProjects()
  }
}
