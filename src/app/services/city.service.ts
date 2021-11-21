import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient, private auth: AuthService ) { }


  getAllCity(): Observable<any>{
    return this.http.get(`${baseUrl}v1/getAllCity`, { 
      headers : new HttpHeaders({
        'token': 'Bearer '+ this.auth.getToken()
      })
    })
  }
}
