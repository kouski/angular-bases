import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{ counter }}</h3>

  <button [class]="'btn btn-outline-success'" (click)="incremento(8)">Incrementar counter</button>
  <button [class]="'btn btn-outline-secondary'" (click)="reset()">Reset</button>
  <button [class]="'btn btn-outline-danger'" (click)="decremento()">Decrementar counter</button>`,

})

export class CounterComponent{
  counter = 10;

  incremento(valor:number):void{
     this.counter +=  valor
  }
  decremento():void{
     this.counter -=  1
  }
  reset():void{
    this.counter = 0;

  }

}
//=============================================================================
