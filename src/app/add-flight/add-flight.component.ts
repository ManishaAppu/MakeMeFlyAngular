import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Iflight } from '../models/flight.model';
import { AirlineService } from '../services/airline.service';
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
    private mealtypeService: MealtypeService) { }

  ngOnInit(): void {
    this.init();
    this.getAllAirline();
    this.getMealType();
  }

  init():void{
    this.addFlightForm = new FormGroup({
      flightName: new FormControl(),
      airlineName: new FormControl(),
      businessSeats: new FormControl(),
      nonBusinessSeats: new FormControl(),
      businessSeatCost: new FormControl(),
      nonBusinessSeatCost: new FormControl(),
      mealType: new FormControl()
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
    console.log(this.addFlightForm);
  
    // this.flight.flightName = this.addFlightForm.controls['flightName'].value;
    // this.flight.airlineId = this.addFlightForm.controls['airlineName'].;


    console.log(" f>>>> " + this.flight);
}


}
