import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';
import { AloginComponent } from './alogin/alogin.component';
import { AddComponent } from './add/add.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PaymentComponent } from './payment/payment.component';
import { DeleteflightComponent } from './deleteflight/deleteflight.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    FlightListComponent,
    SeatSelectionComponent,
    FlightsearchComponent,
    AloginComponent,
    AddComponent,
    PaymentComponent,
    DeleteflightComponent,
    ButtonsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
