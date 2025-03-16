import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { ProdutsComponent } from './products/produts.component';
import { StatesComponent } from './states/states.component';
import { EmplyeeComponent } from './emplyee/emplyee.component';
import { FlipcartComponent } from './flipcart/flipcart.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    CalculatorComponent,
    DatabindingComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    ProdutsComponent,
    StatesComponent,
    EmplyeeComponent,
    FlipcartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
