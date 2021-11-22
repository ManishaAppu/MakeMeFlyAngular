import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookFlightService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  bookFlight(data:any): Observable<any>{
    return this.http.post(`${baseUrl}v1/bookTicket`, data, {
      headers: new HttpHeaders({
            'token': 'Bearer '+ this.auth.getToken()
      })
    })
  }

}
