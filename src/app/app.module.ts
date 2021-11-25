import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { FlightScheduleComponent } from './flight-schedule/flight-schedule.component';
import { AirlineListingComponent } from './airline-listing/airline-listing.component';
import { FlightListingComponent } from './flight-listing/flight-listing.component';
import { SchedulesListingPageComponent } from './schedules-listing-page/schedules-listing-page.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { UpdateAirlineComponent } from './update-airline/update-airline.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { ViewAllTicketsComponent } from './view-all-tickets/view-all-tickets.component';
import { SearchUserPipe } from './Pipes/search-user.pipe';
import { SearchPnrPipe } from './Pipes/search-pnr.pipe';


const routes: Routes = [
  { path:'', component: LoginComponentComponent},
  { path:'login', component: LoginComponentComponent},
  { path:'home', canActivate:[AuthGuard], component: AdminHomeComponent },
  { path:'airlines', canActivate:[AuthGuard],component: AirlineListingComponent },
  { path:'addAirline', canActivate:[AuthGuard], component: AddAirlineComponent },
  { path:'addFlight', canActivate:[AuthGuard], component: AddFlightComponent},
  { path:'airlineListing', canActivate:[AuthGuard], component: AirlineListingComponent},
  { path:'flightListing', canActivate:[AuthGuard], component: FlightListingComponent},
  { path:'flightSchedule', canActivate:[AuthGuard], component: FlightScheduleComponent},
  { path:'admin', canActivate:[AuthGuard], component: AdminHomeComponent},

  { path:'user', canActivate:[AuthGuard], component: UserHomeComponent},
  { path:'bookTicket/:flightScheduleId', canActivate:[AuthGuard], component: BookTicketComponent},
  { path:'viewTicket',canActivate:[AuthGuard],  component: ViewTicketComponent},
  { path:'updateAirline/:airlineId', canActivate:[AuthGuard], component: UpdateAirlineComponent },
  { path:'updateFlight/:flightId', canActivate:[AuthGuard], component: UpdateFlightComponent },
  { path:'viewAllTickets', canActivate:[AuthGuard], component: ViewAllTicketsComponent }
  
  

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    AddFlightComponent,
    AddAirlineComponent,
    AdminHeaderComponent,
    FlightScheduleComponent,
    AirlineListingComponent,
    FlightListingComponent,
    SchedulesListingPageComponent,
    UserHeaderComponent,
    AdminHomeComponent,
    UserHomeComponent,
    FlightSearchComponent,
    BookTicketComponent,
    ViewTicketComponent,
    UpdateAirlineComponent,
    UpdateFlightComponent,
    ViewAllTicketsComponent,
    SearchUserPipe,
    SearchPnrPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(routes)],
    HttpClientModule
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
