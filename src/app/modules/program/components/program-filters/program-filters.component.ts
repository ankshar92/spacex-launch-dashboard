import { Component, Input, OnInit } from '@angular/core';

import { ProgramFilter, ProgramFilterValue } from '../../models/program-filter';

@Component({
  selector: 'app-program-filters',
  templateUrl: './program-filters.component.html',
  styleUrls: ['./program-filters.component.scss'],
})
export class ProgramFiltersComponent implements OnInit {
  @Input() programFilters: ProgramFilter[];

  constructor() {}

  ngOnInit(): void {}

  public trackProgramFilter(_: number, programFilter: ProgramFilter): string {
    return programFilter.title;
  }

  public trackFilterValue(_: number, programFilter: ProgramFilterValue): any {
    return programFilter.value;
  }
}
