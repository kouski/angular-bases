import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  characterList: Character[]= [{
    name: 'Trunks',
    power: 10,
  },
  {
    name: 'Vegeta',
    power: 10000,
  }
]

}
