import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalListModule } from './animal-list/animal-list.module';

@NgModule({
  declarations: [AppComponent, AnimalDetailsComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    AnimalListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
