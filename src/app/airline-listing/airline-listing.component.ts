import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../services/airline.service';

@Component({
  selector: 'app-airline-listing',
  templateUrl: './airline-listing.component.html',
  styleUrls: ['./airline-listing.component.css']
})
export class AirlineListingComponent implements OnInit {

  constructor( private airlineService: AirlineService){ }

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

}
