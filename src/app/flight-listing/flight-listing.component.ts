import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flight-listing',
  templateUrl: './flight-listing.component.html',
  styleUrls: ['./flight-listing.component.css']
})
export class FlightListingComponent implements OnInit {

  constructor(private flightService:FlightService) { }

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

  
}
