import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEventsComponent } from './features/all-events/all-events.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { EventComponent } from './features/event/event.component';
import { BookTableComponent } from './features/book-table/book-table.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: "bookTable", component: BookTableComponent },
  { path: "allEvents", component: AllEventsComponent },
  { path: "event/:id", component: EventComponent },
  { path: "home", component: HomeComponent },
  { path: "**", redirectTo: "/home", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
