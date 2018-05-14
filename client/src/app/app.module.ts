import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PlayerService } from './player.service';
import { PlayersComponent } from './players/players.component';
import { PlayersaddComponent } from './playersadd/playersadd.component';
import { GamesComponent } from './games/games.component';
import { PlayerslistComponent } from './playerslist/playerslist.component';
@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayersaddComponent,
    GamesComponent,
    PlayerslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
