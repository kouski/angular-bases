import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{ counter }}</h3>

  <button (click)="incremento(8)">Incrementar counter</button>
  <button (click)="reset()">Reset</button>
  <button (click)="decremento()">Decrementar counter</button>`,

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
