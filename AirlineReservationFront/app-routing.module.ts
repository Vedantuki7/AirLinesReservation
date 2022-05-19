import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';
import { AloginComponent } from './alogin/alogin.component';
import { AddComponent } from './add/add.component';
import { PaymentComponent } from './payment/payment.component';
import { DeleteflightComponent } from './deleteflight/deleteflight.component';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [
  { path: '', component: FlightsearchComponent},
  { path: 'List', component: FlightListComponent },
  { path:'Registration', component: RegistrationComponent},
  { path:'Login', component: LoginComponent },
  { path: 'seats', component: SeatSelectionComponent },
  { path: 'admin', component: AloginComponent },
  { path: 'addF', component: AddComponent},
  { path: 'pay', component: PaymentComponent},
  { path: 'delete', component: DeleteflightComponent},
  { path: 'button', component: ButtonsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
