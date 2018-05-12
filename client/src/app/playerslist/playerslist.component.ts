import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service';
import {Inject} from '@angular/core';

@Component({
  selector: 'app-playerslist',
  templateUrl: './playerslist.component.html',
  styleUrls: ['./playerslist.component.css']
})
export class PlayerslistComponent implements OnInit {
  players: any;
  constructor(
    private _playerService: PlayerService
    ) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    const obsItem = this._playerService.getAll();
    obsItem.subscribe(data => {
      this.players = data['data'];
    });
  }

  onDelete(item: any) {
    if (confirm(`Are you sure want to delete ${item.name} ?`)) {
      console.log('yes');
      console.log(item);
      const obsItem = this._playerService.delete(item._id);
      obsItem.subscribe(data => {
        console.log(data);
        this.getAll();
      });
    } else {
      console.log('no');
    }
  }

}
