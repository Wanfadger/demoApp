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
import { AnnunciComponent } from './annunci/annunci.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider'
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import { SigaloComponent } from './sigalo/sigalo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    UserComponent,
    TelIMputComponent,
    AnnunciComponent,
    SigaloComponent
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
    NgxMatInputTelComponent,
    MatSelectModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatRadioModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
