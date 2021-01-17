import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { ReviewComponent } from './review/review.component';
import { ThankComponent } from './thank/thank.component';

const routes: Routes = [
  {
    path:'feedback',
    component:FeedbackComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'review',
    component:ReviewComponent
  },
  {
    path:'thank',
    component:ThankComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
