import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineService } from '../services/airline.service';
import { FlightService } from '../services/flight.service';
import { MealtypeService } from '../services/mealtype.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  updateFlightForm  = this.fromBuilder.group({
    flightId: new FormControl(),
    flightName: new FormControl(),
    airlineId: new FormControl(),
    businessSeats: new FormControl(),
    nonBusinessSeats: new FormControl(),
    businessSeatCost: new FormControl(),
    nonBusinessSeatCost: new FormControl(),
    meals: new FormControl()
  })

  airlineList:any[] =[];

  mealList:any[] =[];

  airlineId!: number;

  constructor(private airlineService: AirlineService,
    private mealtypeService: MealtypeService,
    private flightService: FlightService,
    private route: Router,
    private fromBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  
    this.getAllAirline();
    this.getMealType();
    this.initForm();
  }

  initForm(){
     console.log("Inside of the init form >>>> ");
      this.flightService.getFlightById(this.activatedRoute.snapshot.params['flightId']).subscribe(result =>{
        console.log("Airline >>>> "+ result.airline.airlineId);
          this.updateFlightForm = this.fromBuilder.group({
            flightId: new FormControl(result.flightId),
            flightName: new FormControl(result.flightName),
            airlineId: new FormControl(result.airline.airlineName),
            businessSeats: new FormControl(result.businessSeats),
            nonBusinessSeats: new FormControl(result.nonBusinessSeats),
            businessSeatCost: new FormControl(result.businessSeatCost),
            nonBusinessSeatCost: new FormControl(result.nonBusinessSeatCost),
            meals: new FormControl()
          })
          this.airlineId = result.airline.airlineId;
        
        });

      
    
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

  getMealType(){
    this.mealtypeService.getMealType().subscribe(result =>{
      if(result != null){
        console.log(result);
        this.mealList = result;
      }else{
        console.log(" No Mealtype Found");
      }
    });
  }

  updateFlight(){
    console.log("Inside of Flight Update ");
    console.log(this.updateFlightForm.value);
    this.updateFlightForm.controls['airlineId'].setValue(this.airlineId);
    console.log(this.updateFlightForm.value);

    this.flightService.saveFlight(this.updateFlightForm.value).subscribe(result=>{
      if(result != null){
        console.log('Flight Updated successfully');
        this.route.navigate(['flightListing']);
      }
      else{
          console.log('Flight failed  to update !!!');
          this.route.navigate(["updateFlight/{{this.activatedRoute.snapshot.params['flightId']}}"]);
      }
    })
  }
}
