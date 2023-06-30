import { Pipe, PipeTransform } from '@angular/core';
import { POSITIONS } from '../students/positions';
@Pipe({
  name: 'studentTypeColor'
})
export class StudentTypeColorPipe implements PipeTransform {

  transform(position: string): string {

    let color: string;

    switch(position) {
      case POSITIONS.GOAL_KEEPER:
        color = 'grey lighten-1'; 
        break;
      case POSITIONS.DEFENDER:
        color = 'blue lighten-1'; 
        break;
      case POSITIONS.MIDFIELDER:
        color = 'orange lighten-1'; 
        break;
      case POSITIONS.FORWARD:
        color = 'green lighten-1'; 
        break;
      default:
        color = 'brown lighten-1'; 
        break;
    }

    return 'chip ' + color;
  }

}
