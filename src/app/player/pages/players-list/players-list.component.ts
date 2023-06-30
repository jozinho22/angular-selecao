import { Component, OnInit } from '@angular/core';
import { Player } from '../../resources/player';
import { Router } from '@angular/router';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styles: [
  ]
})
export class PlayersListComponent implements OnInit {
  playersList: Player[];

  constructor(
    private router: Router, 
    private playerService: PlayerService
  ) {}

  ngOnInit() {
    this.playersList = this.playerService.getPlayers()
  }

  goToStudent(player: Player) {
    this.router.navigate(['/player', player.id]);
  }
}
