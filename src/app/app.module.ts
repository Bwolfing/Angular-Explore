import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { IRideService, RideService } from "./services/ride-service.service";

import { AppComponent } from './app.component';
import { EstimateCalculatorComponent } from './estimate-calculator/estimate-calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    EstimateCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: IRideService,
      useClass: RideService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
