import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'ViewLoggedData', loadChildren: './view-logged-data/view-logged-data.module#ViewLoggedDataPageModule' },
  { path: 'log-sleepiness', loadChildren: './log-sleepiness/log-sleepiness.module#LogSleepinessPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
