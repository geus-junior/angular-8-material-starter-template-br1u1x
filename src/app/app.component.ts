import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  optionSelected: {name: string};

  options: {name: string}[] = [
    { name: 'Geús Junior' },    
    { name: 'João' },    
    { name: 'Maria' },    
    { name: 'Zezinho' },    
    { name: 'Fulano' },    
    { name: 'Ciclano' },    
    { name: 'Jubileucleuzo' },    
    { name: 'Zezinho maria' },    
    { name: 'Mariclauso' },    
    { name: 'Avicleida' },    
    { name: 'Nalvinha' },    
    { name: 'Josefelina' },    
    { name: 'Anascavelia' },    
  ];


  onSelectOption(option: {name: string}): void {
    this.optionSelected = option;
  }
}
