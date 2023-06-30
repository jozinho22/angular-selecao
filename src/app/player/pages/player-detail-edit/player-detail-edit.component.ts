import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../../resources/player';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-player-detail-edit',
  template: `
    <div *ngIf="player" >
      <h2 class="center">
        Edit player : {{ player.name}}
      </h2>
      <p class="center">
        <img [src]="player.picture" width=500>
      </p>
      <app-player-form [player]="player" />
    </div>
  `,
  styles: [
  ]
})
export class PlayerDetailEditComponent implements OnInit {

  player: Player|undefined;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) {}
  
  ngOnInit(): void {
      const playerId: string|null = this.route.snapshot.paramMap.get('id');
      if(playerId) {
        this.player = this.playerService.getPlayerById(parseInt(playerId));
      } else {
        this.player = undefined;
      }
  }

}
