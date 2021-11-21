import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAirline } from '../models/airline.model';
import { AirlineService } from '../services/airline.service';

@Component({
  selector: 'app-add-airline-component',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {
    airlineForm!: FormGroup;
    airline: IAirline = {'airlineName' : '',
                          'iaia':''
  };
  constructor(private airlineService: AirlineService, private route: Router ) {    
   
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm():void{

    this.airlineForm = new FormGroup({
      airlineName: new FormControl("",
        [
          Validators.minLength(3)//,
          // Validators.maxLength(10),
          // Validators.required
        ]
      ),
      iaia: new FormControl("",
      [
        Validators.minLength(2),
        Validators.maxLength(2),
        Validators.required
      ])
    })
  }


  addAirline(){
    // if(this.airlineForm.controls['airlineName'].value != null && this.airlineForm.controls['airlineName'].value != undefined){
    //   this.airline.airlineName = this.airlineForm.controls['airlineName'].value;
    //   this.airline.iaiaCode = this.airlineForm.controls['iaiaCode'].value;
    // }
    this.airlineService.saveAirline(this.airlineForm.value).subscribe(result =>{
          if(result != null){
                 console.log('Airline Added successfully');
                 this.route.navigate(['airlines']);
          }
          else{
              console.log('Airline addede failed !!!');
              this.route.navigate(['addAirline']);
          }
    })
    console.log(this.airlineForm.value);
  }

}
