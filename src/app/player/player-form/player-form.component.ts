import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../resources/player';
import { Router } from '@angular/router';
import { POSITIONS } from '../resources/positions';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  @Input() player: Player;

  selectedPosition: string;
  service: PlayerService;

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.service = this.playerService;
      this.selectedPosition = this.player.position;
  }

  onSelect(position: string): void {
      this.player.position = position;
  }

  selectPosition($event: Event, position: string) {
    const isChosen = ($event.target as HTMLInputElement).value === position;
    if(isChosen) {
      this.player.position = position;
    }
  }

  onSubmit() {
    console.log("Submitted !")
    this.router.navigate(['/player', this.player.id])
  }

}
