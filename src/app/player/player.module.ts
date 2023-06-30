import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayersListComponent } from './pages/players-list/players-list.component';
import { PlayerDetailComponent } from './pages/player-detail/player-detail.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { PlayerPositionColorPipe } from './pipes/player-position-color.pipe';
import { PlayerService } from './player.service';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerDetailEditComponent } from './pages/player-detail-edit/player-detail-edit.component';

const playerRoutes: Routes = [
  { path: 'player/edit/:id', component: PlayerDetailEditComponent },
  { path: 'player/:id', component: PlayerDetailComponent },
  { path: 'players', component: PlayersListComponent }
];

@NgModule({
  declarations: [
    PlayersListComponent,
    PlayerDetailComponent,
    BorderCardDirective,
    PlayerPositionColorPipe,
    PlayerFormComponent,
    PlayerDetailEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(playerRoutes)
  ],
  providers: [PlayerService]
})
export class PlayerModule { }
