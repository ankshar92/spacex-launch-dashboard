import { Component, OnInit } from '@angular/core';

import { LAUNCH_START_YEAR } from '../../program.constants';
import { ProgramFilter } from '../../models/program-filter';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss'],
})
export class ProgramListComponent implements OnInit {
  public programFilters: ProgramFilter[] = [];

  constructor() {}

  ngOnInit(): void {
    this.prepareFilters();
  }

  private prepareFilters(): void {
    // prepare launch year filters
    this.programFilters = [];
    const launchYears = [];

    const today = new Date();
    let year = LAUNCH_START_YEAR;
    const endYear = today.getFullYear();

    while (year <= endYear) {
      launchYears.push({ label: year.toString(), value: year });
      year++;
    }

    this.programFilters.push({ title: 'Launch Year', filters: launchYears });
    this.programFilters.push({
      title: 'Successful Launch',
      filters: [
        { label: 'True', value: true },
        { label: 'False', value: false },
      ],
    });
    this.programFilters.push({
      title: 'Successful Landing',
      filters: [
        { label: 'True', value: true },
        { label: 'False', value: false },
      ],
    });
  }
}
