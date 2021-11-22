import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CityService } from '../services/city.service';
import { FlightSearchService } from '../services/flight-search.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  constructor(private cityService: CityService,
    private flightSearchService: FlightSearchService,
    private route: Router) { }

  cityList: any[]=[] ;

  flightSearchForm ! : FormGroup;

  availableFlights : any[]= [];

  showChildComponent: boolean = false;


  ngOnInit(): void {
    this.init()
    this.getAllCities();
  }

  init(){
    this.flightSearchForm = new FormGroup({
      travelDate: new FormControl(),
      departurePlaceId: new FormControl(),
      destinationPlaceId: new FormControl()
    })
  }

  getAllCities(){
    this.cityService.getAllCity().subscribe(result =>{
        if(result != null){
          console.log(result);
          this.cityList = result;
        }else{
          console.log(" No Cities Found");
        }
      });
  }

  seachFlight(){
    console.log(this.flightSearchForm.value);
    this.flightSearchService.searchFlight(this.flightSearchForm.value).subscribe(result=>{
      if(result != null){
        console.log('Flight Scheduled successfully');
        console.log(result);
        this.availableFlights = result;
 }
 else{
     console.log('Flight failed  to Scheduled !!!');
     //this.route.navigate(['flightSchedule']);
 }
    }) 
  }

  bookTicket (data:number){
    console.log("Inside Book Ticket method " + data );
    this.showChildComponent = true;
    // const bookingId  = data;
  //  this.route.navigate(['bookTicket']);
  }

}
