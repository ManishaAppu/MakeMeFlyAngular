import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightScheduleService } from '../services/flight-schedule.service';

@Component({
  selector: 'app-schedules-listing-page',
  templateUrl: './schedules-listing-page.component.html',
  styleUrls: ['./schedules-listing-page.component.css']
})
export class SchedulesListingPageComponent implements OnInit {

  scheduledList: any[] =[];

  constructor(private flightScheduleService: FlightScheduleService,
    private route: Router) { }

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

 blockSchedule(data:number){
   console.log("Inside Of Block Schedule");
   this.flightScheduleService.blockSchedule(data).subscribe(() =>{
    console.log("Flight Schedule Blocked Successfully");
    this.reloadCurrentRoute();
  },()=>{
    console.log("Unable to Block Schedule");
 
  });
 }

 reloadCurrentRoute() {
  console.log("Reloading Method ");
  let currentUrl = this.route.url;
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([currentUrl]);
}

 unBlockSchedule(data:number){
   console.log(" Inside of UnBlock Schedule");
   this.flightScheduleService.unBlockSchedule(data).subscribe(() =>{
        console.log("Flight Schedule UnBlocked Successfully");
        this.reloadCurrentRoute();
      },()=>{
    console.log("Unable to UnBlock Schedule");
 
  });
 }

}
