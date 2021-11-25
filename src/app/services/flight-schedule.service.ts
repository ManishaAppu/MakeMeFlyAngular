import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class FlightScheduleService {

  constructor(private http: HttpClient, private auth: AuthService ) { }

  getScheduledFlight(): Observable<any>{
    return this.http.get(`${baseUrl}v1/getSchedules`, {
      headers: new HttpHeaders({
            'token': 'Bearer '+ this.auth.getToken()
      })
    })
  }

  
 scheduleFlight(data:any): Observable<any>{
  return this.http.post(`${baseUrl}v1/scheduleFlight`, data, {
    headers: new HttpHeaders({
          'token': 'Bearer '+ this.auth.getToken()
    })
  })
}

blockSchedule(data:number): Observable<any>{
  return this.http.put(`${baseUrl}v1/blockFlightSchedule/${data}`, {}, {
    headers: new HttpHeaders({
          'token': 'Bearer '+ this.auth.getToken()
    })
  })
}

unBlockSchedule(data:number): Observable<any>{
  return this.http.put(`${baseUrl}v1/unBlockFlightSchedule/${data}`,{},  {
    headers: new HttpHeaders({
          'token': 'Bearer '+ this.auth.getToken()
    })
  })
}
  
}
