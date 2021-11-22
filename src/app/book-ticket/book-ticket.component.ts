import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookFlightService } from '../services/book-flight.service';
import { FlightService } from '../services/flight.service';
import { MealtypeService } from '../services/mealtype.service';


@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {


  @Input() flightScheduleId: number | undefined;

  showDiv = true;

  bookTicketForm!: FormGroup;
  mealList: any[] = [];
  flightSeats: any[] = [];

  constructor(private formbuilder: FormBuilder,
    private mealtypeService: MealtypeService,
    private flightService: FlightService,
    private flightBookService: BookFlightService,
    private route: Router) { }

  ngOnInit(): void {
     this.init();
     this.getFlightSeats(this.flightScheduleId);
     this.getMealType();
  }


  get passengerList(){
    return (<FormArray>this.bookTicketForm.get('passengerList')).controls;
  }

  init(){
     this.bookTicketForm = this.formbuilder.group({
      noOfPassengers: new FormControl(),
      noOfBusinessSeatsBooking: new FormControl(),
      noOfNonBusinessSeatsBooking: new FormControl(),
      travelDate: new FormControl(),
      flightSchedule: new FormGroup({
        "flightScheduleId": new FormControl(this.flightScheduleId)
      }),
      user: new FormGroup({
        "userId": new FormControl(3)
      }),
      passengerList: new FormArray([
       
      ])
    });
  
}

addPassenger(){

  console.log("Inside Of add Passenger");
  const fa = new FormGroup({
    passengerName: new FormControl('test1'),
    gender: new FormControl("female"),
    flightSeat: new FormControl(),
    meal: new FormControl()
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
     this.flightBookService.bookFlight(this.bookTicketForm.value).subscribe(result =>{
      if(result != null){
             console.log('Flight Booked successfully');
             this.route.navigate(['user/home']);
      }
      else{
          console.log('Flight Booked failed !!!');
          this.route.navigate(['user/home']);
      }
})
  }


}
