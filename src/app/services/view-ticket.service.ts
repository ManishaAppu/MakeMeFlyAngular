import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ViewTicketService {

  constructor(private http: HttpClient, private auth: AuthService ) { }

  searchFlight(userEmail: any): Observable<any> {
    return this.http.post(`${baseUrl}v1/getTicketByUserEmail`, userEmail, { 
      headers : new HttpHeaders({
        'token': 'Bearer '+ this.auth.getToken()
      })
    })
  }

  cancelTicket(ticketId: number){
    return this.http.put(`${baseUrl}v1/cancelTicket/${ticketId}`,{}, { 
      headers : new HttpHeaders({
        'token': 'Bearer '+ this.auth.getToken()
      })
    })
  }

  getAllTickets(): Observable<any>{
    return this.http.get(`${baseUrl}v1/getAllTickets/`, { 
      headers : new HttpHeaders({
        'token': 'Bearer '+ this.auth.getToken()
      })
    })
  }

  getTicketById(ticketId: any): Observable<any> {
    return this.http.get(`${baseUrl}v1/getTicket/${ticketId}`, { 
      headers : new HttpHeaders({
        'token': 'Bearer '+ this.auth.getToken()
      })
    })
  }
}
