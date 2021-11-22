import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirlineService } from '../services/airline.service';

@Component({
  selector: 'app-airline-listing',
  templateUrl: './airline-listing.component.html',
  styleUrls: ['./airline-listing.component.css']
})
export class AirlineListingComponent implements OnInit {

  constructor( private airlineService: AirlineService, 
    private route: Router){ }

  airlineList:any[] = [];

 
//   [
//     {
//         "airlineId": 3,
//         "airlineName": "Deccan",
//         "iaia": "DC",
//         "isActive": 1
//     },
//     {
//         "airlineId": 6,
//         "airlineName": "Indigo",
//         "iaia": "IC",
//         "isActive": 1
//     }
// ];

  ngOnInit(): void {
       this.getAllAirline();
  }


  getAllAirline(){
    this.airlineService.getAllAirline().subscribe(result =>{
      if(result != null){
        console.log(result);
        this.airlineList = result;
      }else{
        console.log(" No Airlines Found");
      }
    });
  }

  blockAirline(airlineId: number){
    this.airlineService.blockAirline(airlineId).subscribe(() =>{
      console.log("Airline Blocked Successfully");
      this.reloadCurrentRoute();
    },()=>{
      console.log("Unable to Block Airline");
    });   
  }

  reloadCurrentRoute() {
    console.log("Reloading Method ");
    let currentUrl = this.route.url;
      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate([currentUrl]);
  }

    unBlockAirline(airlineId: number){
      this.airlineService.unBlockAirline(airlineId).subscribe(() =>{
        console.log("Airline UnBlocked Successfully");
        this.reloadCurrentRoute();
      },()=>{
        console.log("Unable to Block Airline");
      }); 
    }
  
   

}
