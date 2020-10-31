import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ProgramFilter, ProgramFilterValue } from '../../models/program-filter';

@Component({
  selector: 'app-program-filters',
  templateUrl: './program-filters.component.html',
  styleUrls: ['./program-filters.component.scss'],
})
export class ProgramFiltersComponent implements OnInit {
  @Input() public programFilters: ProgramFilter[];
  @Input() public appliedFilters: any = {};

  @Output() public applyProgramFilter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public trackProgramFilter(_: number, programFilter: ProgramFilter): string {
    return programFilter.title;
  }

  public trackFilterValue(_: number, programFilter: ProgramFilterValue): any {
    return programFilter.value;
  }

  public isFilterApplied(key: string, value: any): boolean {
    return this.appliedFilters[key] === value;
  }

  public applyFilter(
    filter: ProgramFilterValue,
    programFilter: ProgramFilter
  ): void {
    const currentValue = this.appliedFilters[programFilter.key];

    if (currentValue === filter.value) {
      delete this.appliedFilters[programFilter.key];
    } else {
      this.appliedFilters[programFilter.key] = filter.value;
    }

    this.applyProgramFilter.emit(this.appliedFilters);
  }
}
