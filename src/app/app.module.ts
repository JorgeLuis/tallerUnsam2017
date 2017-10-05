import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule, MatListModule, MatCardModule } from '@angular/material';

import 'hammerjs';
import { POKE_ROUTING } from './routing.module';
import { HomeComponent } from './components/home/home.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemoneInfoComponent } from './components/pokemone-info/pokemone-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonesComponent,
    PokemoneInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule, MatListModule, MatCardModule,
    POKE_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
