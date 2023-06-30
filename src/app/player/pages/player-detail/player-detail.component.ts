import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../../resources/player';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styles: [
  ]
})
export class PlayerDetailComponent implements OnInit {

  playersList: Player[];
  player: Player|undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private playerService: PlayerService
  ) {}

  ngOnInit() {
    const playerId: string|null = this.route.snapshot.paramMap.get('id');
    if(playerId) {
      this.player = this.playerService.getPlayers().find(player => player.id === parseInt(playerId))
    } 
  }

  goBack() {
    this.router.navigate(['/players'])
  }

  edit(player: Player) {
    this.router.navigate(['/player/edit/', player.id])
  }

}
