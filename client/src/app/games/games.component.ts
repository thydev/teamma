import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  players: any;
  gamesNametatus: String = 'game1status';
  gameName = ['game1status', 'game2status', 'game3status'];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _playerService: PlayerService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.gamesNametatus = this.gameName[params['id'] - 1];
      this.getAll();
    });
  }

  getAll() {
    const obsItem = this._playerService.getAll();
    obsItem.subscribe(data => {
      this.players = data['data'];
    });
  }

  onUpdateStatus(player, status: Number) {
    // Dynamic property in ts or js ???
    // const item = {[this.gamesNametatus] : status};
    let item = {};
    if (this.gamesNametatus === 'game1status' ) {
      item = {game1status: status};
    } else if (this.gamesNametatus === 'game2status' ) {
      item = {game2status: status};
    } else if (this.gamesNametatus === 'game3status' ) {
      item = {game3status: status};
    }

    const obsItem = this._playerService.update(player._id, item);
    obsItem.subscribe(data => {
      console.log(data);
      this.getAll();
    });
  }
}
