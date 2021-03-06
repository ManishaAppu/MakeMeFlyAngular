import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flight-listing',
  templateUrl: './flight-listing.component.html',
  styleUrls: ['./flight-listing.component.css']
})
export class FlightListingComponent implements OnInit {

  constructor(private flightService:FlightService,
    private route: Router) { }

  ngOnInit(): void {
    this.getAllFlight();
  }

 
flightList:any[] =[];

getAllFlight(){
    this.flightService.getAllFlight().subscribe(result => {
        if(result != null){
            console.log(result);
            this.flightList = result;
          }else{
            console.log(" No Flights Found");
          }
        })

}

blockFlight(flightId: number){
  this.flightService.blockFlight(flightId).subscribe(() =>{
    console.log("Flight Blocked Successfully");
    this.reloadCurrentRoute();
  },()=>{
    console.log("Unable to Block Flight");
  });   
}

reloadCurrentRoute() {
  console.log("Reloading Method ");
  let currentUrl = this.route.url;
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([currentUrl]);
}

  unBlockFlight(flightId: number){
    this.flightService.unBlockFlight(flightId).subscribe(() =>{
      console.log("Flight UnBlocked Successfully");
      this.reloadCurrentRoute();
    },()=>{
      console.log("Unable to Block Flight");
    }); 
  }


  
}
