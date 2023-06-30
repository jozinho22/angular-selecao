import { Injectable } from '@angular/core';
import { Player } from './resources/player';
import { PLAYERS } from './resources/mock-players';
import { POSITIONS } from './resources/positions';

@Injectable(/* {
  providedIn: 'root'
} */)
export class PlayerService {

  constructor() { }

  getPlayers(): Player[] {
    return PLAYERS
  }

  getPlayerById(playerId: number): Player|undefined {
    return PLAYERS.find(p => p.id === playerId)
  }

  getPlayerPositions(): string[] {
    console.log(Object.values(POSITIONS))
    return Object.values(POSITIONS);
  }
}
