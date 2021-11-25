import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineService } from '../services/airline.service';

@Component({
  selector: 'app-update-airline',
  templateUrl: './update-airline.component.html',
  styleUrls: ['./update-airline.component.css']
})
export class UpdateAirlineComponent implements OnInit {


  updateAirlineForm = new FormGroup({
    airlineName: new FormControl("", Validators.required),
    iaia: new FormControl("", [Validators.required])
  });

  constructor(private airlineService: AirlineService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm():void{
      this.airlineService.getAirlineById(this.activatedRoute.snapshot.params['airlineId']).subscribe(result =>{
      this.updateAirlineForm = new FormGroup({
        airlineId: new FormControl(this.activatedRoute.snapshot.params['airlineId']),
        airlineName: new FormControl(result['airlineName'],
          [
            Validators.minLength(3)//,
            // Validators.maxLength(10),
            // Validators.required
          ]
        ),
        iaia: new FormControl(result['iaia'],
        [
          Validators.minLength(2),
          Validators.maxLength(2),
          Validators.required
        ])
      })
    })
  }


  updateAirline(){
    this.airlineService.saveAirline(this.updateAirlineForm.value).subscribe(result =>{
      if(result != null){
             console.log('Airline Updated successfully');
             this.router.navigate(['airlines']);
      }
      else{
          console.log('Airline update failed !!!');
          this.router.navigate(['airlines']);
      }
})
   
  }

}
