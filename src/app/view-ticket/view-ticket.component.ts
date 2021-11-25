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
  TicketResultList:any[] = [];
  constructor(private route: Router,
    private viewTicketService: ViewTicketService
    ) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.viewFormGroup =  new FormGroup({
      userEmail: new FormControl()
    })

  }

  searchTicket(){
     console.log("Inside of Search Ticket >>>");
     console.log(this.viewFormGroup.value);
     console.log(this.viewFormGroup.controls['userEmail'].value );
     this.viewTicketService.searchFlight(this.viewFormGroup.value).subscribe(result =>{
      if(result != null){
        console.log(result);
        this.TicketResultList = result ;
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
        this.route.navigate(['viewTicket']);
        }else{
          console.log(" No Tickets Found");
        }
      });
  }

}
