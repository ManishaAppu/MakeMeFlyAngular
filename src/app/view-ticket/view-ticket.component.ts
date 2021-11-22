import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewTicketService } from '../services/view-ticket.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

  viewFormGroup!: FormGroup;
  ticketResult !:any;
  constructor(private route: Router,
    private viewTicketService: ViewTicketService
    ) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.viewFormGroup =  new FormGroup({
      ticketId: new FormControl()
    })

  }

  searchTicket(){
     console.log("Inside of Search Ticket >>>");
     console.log(this.viewFormGroup.value);
     console.log(this.viewFormGroup.controls['ticketId'].value );
     this.viewTicketService.searchFlight(this.viewFormGroup.controls['ticketId'].value).subscribe(result =>{
      if(result != null){
        console.log(result);
        this.ticketResult = result ;
      }else{
        console.log(" No Tickets Found");
      }
    });
     
  }

  cancelTicket(data:number){
      console.log("Inside of cancel Ticket") ;

      

      this.viewTicketService.cancelTicket(data).subscribe(result =>{
        if(result != null){
          console.log(result);
          console.log("Ticket Cancelled");
        }else{
          console.log(" No Tickets Found");
        }
      });
  }

}
