import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { PatientModule } from './patients/patient.module';
import { PatientListComponent } from './patients/patient-list.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    PatientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: PatientListComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
