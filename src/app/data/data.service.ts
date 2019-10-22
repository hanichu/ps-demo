import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings): Observable<any>{
    return this.http.post('https://putsreq.com/MRwDM7lds1H7LblOwahz', userSettings);

  }
}
