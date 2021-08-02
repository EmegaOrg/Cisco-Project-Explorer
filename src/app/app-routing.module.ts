import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperCardComponent } from './stepper-card/stepper-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CiscoRecommendationEngineComponent } from './cisco-recommendation-engine/cisco-recommendation-engine.component';

const routes: Routes = [
  { path: 'Homepage', component: HomePageComponent },
  { path: 'Stepper', component: StepperCardComponent },
  { path: 'Product', component: CiscoRecommendationEngineComponent},
  { path: '', redirectTo: 'Homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
