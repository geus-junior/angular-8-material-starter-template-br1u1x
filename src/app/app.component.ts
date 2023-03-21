import { Component } from '@angular/core';

interface OptionModel {
  name: string;
  selected?: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  optionSelected: OptionModel;

  options: OptionModel[] = [
    { name: 'Geús Junior', selected: false },
    { name: 'João', selected: false },
    { name: 'Maria', selected: false },
    { name: 'Zezinho', selected: false },
    { name: 'Fulano', selected: false },
    { name: 'Ciclano', selected: false },
    { name: 'Jubileucleuzo', selected: false },
    { name: 'Zezinho maria', selected: false },
    { name: 'Mariclauso', selected: false },
    { name: 'Avicleida', selected: false },
    { name: 'Nalvinha', selected: false },
    { name: 'Josefelina', selected: false },
    { name: 'Anascavelia', selected: false },
  ];

  multiple: boolean = false;

  checkboxAll: boolean = false;

  onSelectOption(option: OptionModel, isSelected: boolean): void {
    if (this.multiple) {
      option.selected = isSelected;
    } else {
      this.optionSelected = option;
    }
    console.log(option);
  }

  onToggleCheckboxAll(event: any): void {
    this.options.map((o) => this.onSelectOption(o, this.checkboxAll));
  }

  get indeterminateCheckboxAll(): boolean {
    const countSelected: number = this.options.filter((o) => o.selected).length;
    if (countSelected <= 0) {
      return false;
    }

    return (countSelected > 0) && (this.options.length !== countSelected);
  }

  get showClearCombobox(): boolean {
    const countSelected: number = this.options.filter((o) => o.selected).length;
    return (this.optionSelected || (countSelected > 0));
  }

  getOptionSelected(): string {
    if (this.multiple) {
      const option: OptionModel = this.options.find((o) => o.selected);
      const lenghtSelected: number = this.options.filter(
        (o) => o.selected
      ).length;
      const result: string = option
        ? `${option.name} (+${String(lenghtSelected)})`
        : '';
      return result;
    } else {
      return this.optionSelected ? this.optionSelected.name : '';
    }
  }

  resetOptionSelected(): void {
    if (this.multiple) {
      this.checkboxAll = false;
      this.options.map((o) => (o.selected = false));
    } else {
      this.optionSelected = null;
    }
  }
}
