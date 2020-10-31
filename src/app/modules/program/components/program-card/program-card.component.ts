import { Component, Input, OnInit } from '@angular/core';

import { LaunchProgram } from '../../models/launch-program';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss'],
})
export class ProgramCardComponent implements OnInit {
  public index: number | string;

  // for unique ids for the card
  @Input() set id(id: number | string) {
    this.index = id;
  }
  @Input() program: LaunchProgram;

  constructor() {}

  ngOnInit(): void {}

  public getValue(value: boolean): string {
    let strValue = 'None';

    if (value === true) {
      strValue = 'True';
    } else if (value === false) {
      strValue = 'False';
    }

    return strValue;
  }
}
