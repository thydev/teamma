import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { PlayersaddComponent } from './playersadd/playersadd.component';
import { PlayerslistComponent } from './playerslist/playerslist.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
  { path: 'players', component: PlayersComponent, children: [
    { path: 'add', component: PlayersaddComponent },
    { path: 'list', component: PlayerslistComponent },
  ]},
  { path: 'games/:id', component: GamesComponent },
  // { path: '', component: PlayerslistComponent },
  { path: '', pathMatch: 'full', redirectTo: '/players/list' },
  { path: '**', component: PlayerslistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
