import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MeetingsTasksType } from '../models/crmapp-data/meetings-tasks';

@Injectable({
  providedIn: 'root'
})
export class CRMAppDataService {
  constructor(
    private http: HttpClient
  ) { }

  public getMeetingsTasks(): Observable<MeetingsTasksType[]> {
    return this.http.get<MeetingsTasksType[]>("https://excel2json.io/api/share/2fd4ecd6-da6c-4e37-e666-08dab79fa5b4");
  }
}
