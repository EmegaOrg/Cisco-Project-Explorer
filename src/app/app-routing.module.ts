import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiscoRecommendationEngineComponent } from './cisco-recommendation-engine/cisco-recommendation-engine.component';

const routes: Routes = [
  { path: 'Product', component: CiscoRecommendationEngineComponent},
  { path: '', redirectTo: 'Homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
