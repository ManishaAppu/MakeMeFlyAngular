import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    flightId: new FormControl("", Validators.required),
    flightName: new FormControl("", Validators.required),
    airlineId: new FormControl("", Validators.required),
    businessSeats: new FormControl("", Validators.required),
    nonBusinessSeats: new FormControl("", Validators.required),
    businessSeatCost: new FormControl("", Validators.required),
    nonBusinessSeatCost: new FormControl("", Validators.required),
    meals: new FormControl("", Validators.required)
  })

  airlineList:any[] =[];

  mealList:any[] =[];

  airlineId!: number;

  userChosenMealList: any[]= [];

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
          this.userChosenMealList = result.meals;
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
    // if(this.updateFlightForm.controls['meals'] == null){
    //   this.updateFlightForm.controls['meals'].setValue(this.userChosenMealList);
    // }

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
