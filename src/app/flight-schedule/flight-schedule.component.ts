import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CityService } from '../services/city.service';
import { FlightScheduleService } from '../services/flight-schedule.service';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flight-schedule',
  templateUrl: './flight-schedule.component.html',
  styleUrls: ['./flight-schedule.component.css']
})
export class FlightScheduleComponent implements OnInit {

  constructor(private cityService: CityService, 
              private flightService: FlightService,
              private flightScheduleService: FlightScheduleService,
              private route : Router
    ){}
  cityList:any[] =[];
  flightNameList!:any[];

  flightScheduleForm!: FormGroup;

  ngOnInit(): void {
    this.init();
    this.getAllCities();
    this.getFlightSchedules();
  }

  init(){
       this.flightScheduleForm = new FormGroup({
            flightId : new FormControl("",Validators.required),
           departureTime: new FormControl("",Validators.required),
           arrivalTime: new FormControl("",Validators.required),
           scheduledStartDate: new FormControl("",Validators.required),
           scheduledEndDate: new FormControl("",Validators.required),
           departurePlaceId: new FormControl("",Validators.required),
           destinationPlaceId: new FormControl("",Validators.required),
           scheduleDaysId: new FormControl(1)
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

  getFlightSchedules(){
    this.flightService.getAllFlight().subscribe(result =>{
        if(result != null){
          console.log(result);
           this.flightNameList = result;
        }else{
          console.log(" No Flights Found");
        }
      });
  }

  scheduleFlight(){
      console.log(this.flightScheduleForm.value);
      this.flightScheduleService.scheduleFlight(this.flightScheduleForm.value).subscribe(result=>{
        if(result != null){
          console.log('Flight Scheduled successfully');
          this.route.navigate(['home']);
   }
   else{
       console.log('Flight failed  to Scheduled !!!');
       this.route.navigate(['flightSchedule']);
   }
      }) 

  }

}
