import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NotyfModule } from 'ng-notyf';

import { AppComponent } from './app.component';
import { NewOglasComponent } from './new-oglas/new-oglas.component';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { OglasComponent } from './oglas/oglas.component';
import { EditOglasComponent } from './edit-oglas/edit-oglas.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { TermsComponent } from './terms/terms.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewOglasComponent,
    HomeComponent,
    OglasComponent,
    EditOglasComponent,
    LoginComponent,
    TermsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NotyfModule
  ],
  providers: [AuthGuardService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
