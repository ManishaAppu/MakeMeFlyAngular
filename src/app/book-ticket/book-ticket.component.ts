import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookFlightService } from '../services/book-flight.service';
import { FlightService } from '../services/flight.service';
import { MealtypeService } from '../services/mealtype.service';


@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {


  // @Input() flightScheduleId: number | undefined;

   flightScheduleId !: number ;

  bookTicketForm!: FormGroup;
  mealList: any[] = [];
  flightSeats: any[] = [];

  constructor(private formbuilder: FormBuilder,
    private mealtypeService: MealtypeService,
    private flightService: FlightService,
    private flightBookService: BookFlightService,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
     this.init();
     this.getFlightSeats(this.activatedRoute.snapshot.params['flightScheduleId']);
     this.getMealType();
  }


  get passengerList(){
    return (<FormArray>this.bookTicketForm.get('passengerList')).controls;
  }

  init(){
     this.bookTicketForm = this.formbuilder.group({
      noOfPassengers: new FormControl(" ",[Validators.required]),
      noOfBusinessSeatsBooking: new FormControl(" ",[Validators.required]),
      noOfNonBusinessSeatsBooking: new FormControl(" ",[Validators.required]),
      travelDate: new FormControl(" ",[Validators.required]),
      flightSchedule: new FormGroup({
        "flightScheduleId": new FormControl(this.activatedRoute.snapshot.params['flightScheduleId'])
      }),
      userEmail: new FormControl(" ",[Validators.required]),
      passengerList: new FormArray([
       
      ])
    });
  
}

addPassenger(){

  console.log("Inside Of add Passenger");
  const fa = new FormGroup({
    passengerName: new FormControl(" ",[Validators.required]),
    gender: new FormControl(" ",[Validators.required]),
    flightSeat: new FormControl(" ",[Validators.required]),
    meal: new FormControl(" ",[Validators.required])
  });
  
 (<FormArray>this.bookTicketForm.get('passengerList')).push(fa);
  
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


getFlightSeats(flightScheduleId:any){
    this.flightService.getFlightSeats(flightScheduleId).subscribe(result =>{
    if(result != null){
      console.log(result);
      this.flightSeats = result;
    }else{
      console.log(" No Flight Seats Found");
    }
  });
}



  ReserveTicket(){
     console.log("Inside of Reserve Ticket");
     console.log(this.bookTicketForm.value);
    this.bookTicketForm.controls['noOfPassengers'].setValue(2);
    console.log(" After No Of Passengers" + this.bookTicketForm.value);

     this.flightBookService.bookFlight(this.bookTicketForm.value).subscribe(result =>{
      if(result != null){
             console.log('Flight Booked successfully');
             this.route.navigate(['user']);
      }
      else{
          console.log('Flight Booked failed !!!');
          this.route.navigate(['user/home']);
      }
})
  }


}
