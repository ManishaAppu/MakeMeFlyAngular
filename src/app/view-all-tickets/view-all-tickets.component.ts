import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewTicketService } from '../services/view-ticket.service';

@Component({
  selector: 'app-view-all-tickets',
  templateUrl: './view-all-tickets.component.html',
  styleUrls: ['./view-all-tickets.component.css']
})
export class ViewAllTicketsComponent implements OnInit {

  filterString:string = '';
  pnrFilter:string ='';

  allTickets :any[] = [] ;

  
  constructor(private route: Router, 
              private viewTicketService: ViewTicketService) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
     this.viewTicketService.getAllTickets().subscribe(result=>{
       if(result != null){
        this.allTickets = result;
       }
            
     })
  }
}
