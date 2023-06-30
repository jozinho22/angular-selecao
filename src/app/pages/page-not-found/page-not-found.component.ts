import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="center">
      <img width=800 src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta0b651a34b44d5fc/60dbd8dc22d24e38a38b5f26/f32a20235b7c8a97cf370120f607bbb8a78f1dbe.jpg?auto=webp&format=pjpg&width=3840&quality=60" />
      <h1>Cette route n'existe pas !</h1>
      <a routerLink="/players" class="chip waves-effect waves-teal btn-flat">
        Retourner à l'accueil
      </a>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {

}
