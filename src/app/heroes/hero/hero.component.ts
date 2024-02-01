import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name:string = 'ironman';
  age:number = 45;

  get CapitalizedName():string {
    return this.name.toUpperCase()
  }

  getHeroeDescription():string{
    return `${this.name}-${this.age}`
  }

  changeName():void{
     this.name = 'spiderman';
  }
  changeAge():void{
     this.age = 25;
  }
  reset():void{
    this.name =  "ironman";
     this.age = 45;
  }
}
