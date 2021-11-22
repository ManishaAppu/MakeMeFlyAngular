import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class FlightService {


  constructor(private http: HttpClient, private auth: AuthService ) { }

  saveFlight(data:any): Observable<any>{
    return this.http.post(`${baseUrl}v1/addFlight`, data, {
      headers: new HttpHeaders({
            'token': 'Bearer '+ this.auth.getToken()
      })
    })
  }

  getAllFlight(): Observable<any>{
    return this.http.get(`${baseUrl}v1/getAllFlight`, { 
      headers : new HttpHeaders({
        'token': 'Bearer '+ this.auth.getToken()
      })
    })
  }

  getFlightSeats(flightScheduleId: number): Observable<any> {
    return this.http.get(`${baseUrl}v1/getFlightSeats/${flightScheduleId}`, { 
      headers : new HttpHeaders({
        'token': 'Bearer '+ this.auth.getToken()
      })
    })
  }

  getFlightById(data: number): Observable<any> {
    return this.http.get(`${baseUrl}v1/getAllFlight/${data}`, { 
      headers : new HttpHeaders({
        'token': 'Bearer '+ this.auth.getToken()
      })
    })
  }

  blockFlight(data:any): Observable<any>{
    return this.http.put(`${baseUrl}v1/blockFlight/${data}`,{ }, {
      headers: new HttpHeaders({
            'token': 'Bearer '+ this.auth.getToken()
      })
    })
  }
  
  unBlockFlight(data:any): Observable<any>{
    return this.http.put(`${baseUrl}v1/unBlockAirline/${data}`,{ }, {
      headers: new HttpHeaders({
            'token': 'Bearer '+ this.auth.getToken()
      })
    })
  }

}
