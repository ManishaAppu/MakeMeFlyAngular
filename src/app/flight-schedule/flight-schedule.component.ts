import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-schedule',
  templateUrl: './flight-schedule.component.html',
  styleUrls: ['./flight-schedule.component.css']
})
export class FlightScheduleComponent implements OnInit {

  cityList:any[] =[
    {
        "cityId": 1,
        "cityName": "Delhi",
        "cityCode": "DEL",
        "isActive": 1
    },
    {
        "cityId": 2,
        "cityName": "Goa",
        "cityCode": "GOI",
        "isActive": 1
    },
    {
        "cityId": 3,
        "cityName": "Chennai",
        "cityCode": "MAA",
        "isActive": 1
    },
    {
        "cityId": 4,
        "cityName": "Coimabtore",
        "cityCode": "CJB",
        "isActive": 1
    },
    {
        "cityId": 5,
        "cityName": "Kochi",
        "cityCode": "COK",
        "isActive": 1
    },
    {
        "cityId": 6,
        "cityName": "Kolkata",
        "cityCode": "CCU",
        "isActive": 1
    },
    {
        "cityId": 7,
        "cityName": "Bangalore",
        "cityCode": "BLR",
        "isActive": 1
    },
    {
        "cityId": 8,
        "cityName": "Hydrabad",
        "cityCode": "HYD",
        "isActive": 1
    },
    {
        "cityId": 9,
        "cityName": "Calicut",
        "cityCode": "CCJ",
        "isActive": 1
    }
];


flightNameList:any[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
