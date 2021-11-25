import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iflight } from '../models/flight.model';
import { AirlineService } from '../services/airline.service';
import { FlightService } from '../services/flight.service';
import { MealtypeService } from '../services/mealtype.service';

@Component({
  selector: 'add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  addFlightForm!: FormGroup;

  airlineList:any[] =[];

  mealList:any[] =[];

  flight!:Iflight ;


  constructor(private airlineService: AirlineService,
    private mealtypeService: MealtypeService,
    private flightService: FlightService,
    private route: Router,
    private fromBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.init();
    this.getAllAirline();
    this.getMealType();
  }

  init():void{
    this.addFlightForm = this.fromBuilder.group({
      flightName: new FormControl("",[Validators.required]),
      airlineId: new FormControl("",[Validators.required]),
      businessSeats: new FormControl("",[Validators.required]),
      nonBusinessSeats: new FormControl("",[Validators.required]),
      businessSeatCost: new FormControl("",[Validators.required]),
      nonBusinessSeatCost: new FormControl("",[Validators.required]),
      meals: new FormControl("",[Validators.required])
    })
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

  addFlight(){
    console.log(" Inside of Add Airline");
    console.log(this.addFlightForm.value);
  
    this.flightService.saveFlight(this.addFlightForm.value).subscribe(result=>{
      if(result != null){
        console.log('Flight Added successfully');
        this.route.navigate(['flightListing']);
 }
 else{
     console.log('Flight failed  to add !!!');
     this.route.navigate(['addFlight']);
 }
    })
   
}

}
