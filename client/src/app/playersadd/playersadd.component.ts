import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-playersadd',
  templateUrl: './playersadd.component.html',
  styleUrls: ['./playersadd.component.css']
})
export class PlayersaddComponent implements OnInit {
  player: any;
  message = '';
  errors = {
    name: ''
  } ;
  constructor(
    private _playerService: PlayerService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.player = { name: '', position: ''};
  }

  onSubmit() {
    const obsItem = this._playerService.addNew(this.player);
    obsItem.subscribe(data => {
      // console.log(data);
      this.message = data['message'];
      if (data['message'] === 'Success') {
        this.message = ': ' + this.player.name + ' was added!';
        this.player = {name: '', position: ''};
        this.errors.name = '';
        this.goHome();
      } else {
        console.log(data['error'].errors);
        this.errors = data['error'].errors;

        // for (const err in data['error'].errors) {
        //   // console.log(err);
        //   if (err) {
        //     this.errors.name = data['error'].errors[err].message;
        //   }
        //   // console.log(err);
        // }

      }
    });
  }

  goHome() {
    this._router.navigate(['/players/list']);
  }

}
