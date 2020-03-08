import { Observable } from "rxjs";

export default interface IScraperService {
  getProjects(data: {}): Observable<any>
  GetSpiders(): Observable<any>
  RunSpiders(): Observable<any>
  ScheduleSpider(): Observable<any>
  CancelScheduleSpiders(): Observable<any>
  GetJobs(): Observable<any>
  GetJob(): Observable<any>
  CancelJob(): Observable<any>
}
