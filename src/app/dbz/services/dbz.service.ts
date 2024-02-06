import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  characters: Character[] = [
    /* {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 10,
    }, */
  ];

  addCharacter(character: Character):void{

    const newCharacter:Character ={ ...character, id:uuid()}
    this.characters.push(newCharacter);

  }

  //OnDeleteCharacter(index:number):void{
    //this.characters.splice(index,1);

  deleteCharacterById(id:string){
  this.characters =this.characters.filter((character)=> character.id !== id)
  }
}