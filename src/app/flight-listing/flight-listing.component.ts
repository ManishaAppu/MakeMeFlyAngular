import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-listing',
  templateUrl: './flight-listing.component.html',
  styleUrls: ['./flight-listing.component.css']
})
export class FlightListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 
flightList:any[] =[
  {
      "flightId": 3,
      "flightName": "Deccan CS1",
      "businessSeats": 20,
      "nonBusinessSeats": 15,
      "businessSeatCost": 9000.0,
      "nonBusinessSeatCost": 3000.0,
      "isActive": 1,
      "airline": {
          "airlineId": 2,
          "airlineName": "Decaan",
          "iaia": "DC",
          "isActive": 0
      },
      "meals": [
          {
              "mealId": 1,
              "mealType": "veg"
          },
          {
              "mealId": 2,
              "mealType": "Non-veg"
          }
      ],
      "flightSeats": [
          {
              "flightSeatId": 1,
              "flightSeatNumber": "B1",
              "isBusinessSeat": 1
          }
      ]
  },
  {
      "flightId": 4,
      "flightName": "Deccan CS1",
      "businessSeats": 20,
      "nonBusinessSeats": 15,
      "businessSeatCost": 9000.0,
      "nonBusinessSeatCost": 3000.0,
      "isActive": 1,
      "airline": {
          "airlineId": 1,
          "airlineName": "Decaan_TC",
          "iaia": "DC_TC",
          "isActive": 0
      },
      "meals": [
          {
              "mealId": 1,
              "mealType": "veg"
          },
          {
              "mealId": 2,
              "mealType": "Non-veg"
          }
      ],
      "flightSeats": [
          {
              "flightSeatId": 36,
              "flightSeatNumber": "B1",
              "isBusinessSeat": 1
          }
      ]
  },
  {
      "flightId": 5,
      "flightName": "Indigo CS1",
      "businessSeats": 20,
      "nonBusinessSeats": 15,
      "businessSeatCost": 9000.0,
      "nonBusinessSeatCost": 3000.0,
      "isActive": 1,
      "airline": {
          "airlineId": 6,
          "airlineName": "Indigo",
          "iaia": "IC",
          "isActive": 1
      },
      "meals": [
          {
              "mealId": 1,
              "mealType": "veg"
          },
          {
              "mealId": 2,
              "mealType": "Non-veg"
          }
      ],
      "flightSeats": [
          {
              "flightSeatId": 71,
              "flightSeatNumber": "B1",
              "isBusinessSeat": 1
          }
      ]
  }
];

  
}
