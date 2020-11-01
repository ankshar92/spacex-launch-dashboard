import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AUTHOR } from 'src/app/shared/shared.constants';
import { LAUNCH_START_YEAR } from '../../program.constants';

import { ProgramState } from '../../models/program-state';
import { LaunchProgram } from '../../models/launch-program';
import { ProgramFilter } from '../../models/program-filter';
import { ProgramListFilters } from '../../models/program-list-query-params';

import { ProgramService } from '../../services/program.service';
import { ProgramStateService } from '../../services/program-state.service';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss'],
})
export class ProgramListComponent implements OnInit, OnDestroy {
  public programFilters: ProgramFilter[] = [];
  public author = AUTHOR;
  public state: ProgramState;
  public appliedFilters: ProgramListFilters;

  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private programService: ProgramService,
    private programStateService: ProgramStateService
  ) {}

  ngOnInit(): void {
    this.prepareFilters();

    // TODO: show loader using HTTP interceptor
    const sub = this.programStateService.state$.subscribe(
      (state: ProgramState) => {
        if (state.error) {
          // window object can be injected using a service to make it unit testable
          alert(`Error occurred: ${state.error.message}`);
        }
        this.state = state;
      }
    );
    this.subscriptions.push(sub);

    this.route.queryParamMap.subscribe((qp: any) => {
      this.appliedFilters = new ProgramListFilters(qp.params);
      this.programService.getPrograms(this.appliedFilters);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  private prepareFilters(): void {
    // prepare launch year filters
    this.programFilters = [];
    const launchYears = [];

    const today = new Date();
    let year = LAUNCH_START_YEAR;
    const endYear = today.getFullYear();

    while (year <= endYear) {
      launchYears.push({ label: year.toString(), value: year.toString() });
      year++;
    }

    const booleanValues = [
      { label: 'True', value: true },
      { label: 'False', value: false },
    ];
    this.programFilters.push(
      new ProgramFilter('Launch Year', 'launchYear', launchYears)
    );
    this.programFilters.push(
      new ProgramFilter('Successful Launch', 'launchSuccess', booleanValues)
    );
    this.programFilters.push(
      new ProgramFilter('Successful Landing', 'landSuccess', booleanValues)
    );
  }

  public trackLaunch(_: number, launch: LaunchProgram): string {
    return launch.missionName + launch.flightNumber;
  }

  public applyProgramFilter(appliedFilter): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: appliedFilter,
    });
  }
}
