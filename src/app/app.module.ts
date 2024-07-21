import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import { HeroComponent } from './hero/hero.component';
import { UserComponent } from './hero/user/user.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TelIMputComponent } from './tel-imput/tel-imput.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NgxMatInputTelComponent } from 'ngx-mat-input-tel';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    UserComponent,
    TelIMputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMatInputTelComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
