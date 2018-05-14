import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {PlayerService} from '../player.service';

@Component({
  selector: 'app-playerslist',
  templateUrl: './playerslist.component.html',
  styleUrls: ['./playerslist.component.css']
})
export class PlayerslistComponent implements OnInit {
  players: any;
  playerToDelete: any;

  closeResult: string;
  gameStatus = ['Undecided', 'Not Playing', 'Playing'];

  constructor(
    private _playerService: PlayerService,
    private modalService: NgbModal
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

  onDelete(item: any, content) {
    this.playerToDelete = item;
    this.open(content);
    // if (confirm(`Are you sure want to delete ${item.name} ?`)) {
    //   console.log('yes');
    //   console.log(item);
    //   const obsItem = this._playerService.delete(item._id);
    //   obsItem.subscribe(data => {
    //     console.log(data);
    //     this.getAll();
    //   });
    // } else {
    //   console.log('no');
    // }
  }
  onDeleteYes(item: any) {
    const obsItem = this._playerService.delete(item._id);
    obsItem.subscribe(data => {
      console.log(data);
      this.getAll();
    });
  }

  open(content) {
    this.modalService.open(content, { centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (result === 'confirmYes') {
        this.onDeleteYes(this.playerToDelete);
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
