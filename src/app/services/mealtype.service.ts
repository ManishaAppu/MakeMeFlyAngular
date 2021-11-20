import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class MealtypeService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getMealType(): Observable<any>{
    return this.http.get(`${baseUrl}v1/getMealType`, { 
      headers : new HttpHeaders({
        'token': 'Bearer '+ this.auth.getToken()
      })
    })
  }
  
}
