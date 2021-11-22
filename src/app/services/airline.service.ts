import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(private http: HttpClient, private auth: AuthService) { }

saveAirline(data:any): Observable<any>{
  return this.http.post(`${baseUrl}v1/addAirline`, data, {
    headers: new HttpHeaders({
          'token': 'Bearer '+ this.auth.getToken()
    })
  })
}

getAllAirline(): Observable<any>{
  return this.http.get(`${baseUrl}v1/getAirlines`, { 
    headers : new HttpHeaders({
      'token': 'Bearer '+ this.auth.getToken()
    })
  })
}

blockAirline(data:any): Observable<any>{
  return this.http.put(`${baseUrl}v1/blockAirline/${data}`,{ }, {
    headers: new HttpHeaders({
          'token': 'Bearer '+ this.auth.getToken()
    })
  })
}

unBlockAirline(data:any): Observable<any>{
  return this.http.put(`${baseUrl}v1/unBlockAirline/${data}`,{ }, {
    headers: new HttpHeaders({
          'token': 'Bearer '+ this.auth.getToken()
    })
  })
}

//getAirline

getAirlineById(data: number): Observable<any> {
  return this.http.get(`${baseUrl}v1/getAirline/${data}`, { 
    headers : new HttpHeaders({
      'token': 'Bearer '+ this.auth.getToken()
    })
  })
}


}
