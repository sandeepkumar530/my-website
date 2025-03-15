import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CircleComponent } from './circle/circle.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BmiComponent } from './bmi/bmi.component';
import { ProdutsComponent } from './products/produts.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent,children:[
    {path:'welcome',component:WelcomeComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'databinding',component:DatabindingComponent},
    {path:'circle',component:CircleComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'bmi',component:BmiComponent},
{path:'directives',component:ProdutsComponent}
  ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
