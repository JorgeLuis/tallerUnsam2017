import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemoneInfoComponent } from './components/pokemone-info/pokemone-info.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'pokemones', component: PokemonesComponent },
   { path: 'pokemon/:id', component: PokemoneInfoComponent },
   { path: '**', redirectTo: 'home' }
];

export const POKE_ROUTING = RouterModule.forRoot(routes);