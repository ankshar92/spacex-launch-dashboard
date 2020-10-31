import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { LAUNCH_PROGRAM_API } from '../program.constants';

import { LaunchProgram } from '../models/launch-program';
import { ProgramListFilters } from '../models/program-list-query-params';

import { UtilsService } from 'src/app/shared/services/utils.service';
import { ProgramStateService } from './program-state.service';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  constructor(
    private http: HttpClient,
    private utils: UtilsService,
    private state: ProgramStateService
  ) {}

  // TODO: check any type
  public getPrograms(queryParams: ProgramListFilters): void {
    const params = new HttpParams({
      fromObject: {
        limit: '100',
        ...this.utils.getSnakeCaseObject(queryParams),
      },
    });

    this.http
      .get(LAUNCH_PROGRAM_API, {
        params,
      })
      .pipe(
        map((launches: LaunchProgram[]) =>
          (launches || []).map(
            (launch) => new LaunchProgram(this.utils.getCamelCaseObject(launch))
          )
        )
      )
      .subscribe(
        (launches) => this.state.setState(null, launches),
        (error) => this.state.setState(error, [])
      );
  }
}
