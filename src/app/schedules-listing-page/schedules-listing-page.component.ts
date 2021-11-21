import { Component, OnInit } from '@angular/core';
import { FlightScheduleService } from '../services/flight-schedule.service';

@Component({
  selector: 'app-schedules-listing-page',
  templateUrl: './schedules-listing-page.component.html',
  styleUrls: ['./schedules-listing-page.component.css']
})
export class SchedulesListingPageComponent implements OnInit {

  scheduledList: any[] =[];

  constructor(private flightScheduleService: FlightScheduleService) { }

  ngOnInit(): void {
   this.getScheduledFlights();
  }

  getScheduledFlights(){
   this.flightScheduleService.getScheduledFlight().subscribe(result =>{
       if(result != null){
         console.log(result);
         this.scheduledList = result;
       }else{
         console.log(" No Schedules Found");
       }
     });
 }

}
