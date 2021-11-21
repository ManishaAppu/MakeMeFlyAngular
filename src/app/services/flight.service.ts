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
}
