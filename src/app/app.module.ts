import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { AllEventsComponent } from './features/all-events/all-events.component';
import { LoginComponent } from './auth/login/login.component';
import { EventComponent } from './features/event/event.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './shared/search.pipe';
import { SafePipe } from './shared/safe.pipe';
import { BookTableComponent } from './features/book-table/book-table.component';
import { RegisterComponent } from './auth/register/register.component';
import { ClickOutsideDirective } from './shared/click-outside.directive';
import { HttpClientModule } from '@angular/common/http';
// import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AllEventsComponent,
    // LoginComponent,
    EventComponent,
    SearchPipe,
    SafePipe,
    BookTableComponent,
    // RegisterComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // CarouselModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
