import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './component/hero-container/heroes/heroes.component';
import { HeroContainerComponent } from './component/hero-container/hero-container.component';

import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MatInputModule} from '@angular/material/input';

const MATERIALS = [
  MatInputModule
]
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...MATERIALS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
