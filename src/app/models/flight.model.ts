import { Imeal } from "./meal.model";

export interface Iflight{
   
    flightName: string;
    airlineId: number;
    businessSeats: number;
    nonBusinessSeats: number;
    businessSeatCost: number;
    nonBusinessSeatCost: number;
    meals: Imeal[];
}