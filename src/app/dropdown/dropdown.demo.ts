import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'soho-dropdown-demo',
  templateUrl: 'dropdown.demo.html',
})
export class DropdownDemoComponent implements OnInit {
  private options: Array<Object> = [
    { value: 'AL', text: 'Alabama' },
    { value: 'CA', text: 'California' },
    { value: 'DE', text: 'Delaware' },
    { value: 'NY', text: 'New York' },
    { value: 'WY', text: 'Wyoming' },
  ];
  private sourceoptions: Array<Object> = [];
  private counter = 0;
  private model = { // tslint:disable-line
    single: '',
    readOnly: 'DE',
    source: '',
    modifiable: this.options[3],
  };
  private showModel = false;

  constructor() { }
  ngOnInit() { }
  onAddOption() {
    this.options.push({ value: 'test' + this.counter, text: 'Test ' + this.counter });
    this.counter++;
  }
  onRemoveOption() {
    this.options.pop();
  }
  toggleModel() {
    this.showModel = !this.showModel;
  }
  private source(response: any, searchTerm: any) {
    let states = [
      { value: 'AK', label: 'Alaska'},
      { value: 'AZ', label: 'Arizona'},
      { value: 'CA', label: 'California'},
      { value: 'CO', label: 'Colorado'},
      { value: 'MN', label: 'Minnesota'},
      { value: 'ND', label: 'North Dakota'},
      { value: 'OR', label: 'Oregon'},
      { value: 'WA', label: 'Washington'},
      { value: 'WY', label: 'Wyoming'}
    ];

    this.sourceoptions = states;

    response(states);
  }
}