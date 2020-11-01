import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LAUNCH_PROGRAM_API } from '../program.constants';
import { ProgramService } from './program.service';
import { ProgramStateService } from './program-state.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { LaunchProgram } from '../models/launch-program';

describe('ProgramService', () => {
  let service: ProgramService;
  let programState: ProgramStateService;
  let utils: UtilsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProgramService);
    programState = TestBed.inject(ProgramStateService);
    utils = TestBed.inject(UtilsService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch launch programs', () => {
    spyOn(programState, 'setState');
    const response: any = [
      {
        mission_name: 'MissionName',
        flight_number: 1,
        links: { mission_patch_small: '' },
        mission_id: ['1001'],
        launch_year: 2020,
        launch_success: true,
        rocket: { first_stage: { cores: [{ land_success: false }] } },
      },
    ];
    const parsedResponse = response.map(
      (r) => new LaunchProgram(utils.getCamelCaseObject(r))
    );

    service.getPrograms({});

    const req = httpTestingController.expectOne(
      `${LAUNCH_PROGRAM_API}?limit=100`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(response);

    httpTestingController.verify();

    expect(programState.setState).toHaveBeenCalled();
    expect(programState.setState).toHaveBeenCalledWith(null, parsedResponse);
  });

  it('should handle error while fetching launch programs', () => {
    spyOn(programState, 'setState');
    service.getPrograms({});

    const req = httpTestingController.expectOne(
      `${LAUNCH_PROGRAM_API}?limit=100`
    );
    expect(req.request.method).toEqual('GET');
    const errorOptions = {
      status: 500,
      statusText: 'Internal Server Error',
    };
    req.flush(null, errorOptions);

    httpTestingController.verify();

    expect(programState.setState).toHaveBeenCalled();
    expect(programState.setState).toHaveBeenCalledWith(
      jasmine.objectContaining(errorOptions),
      []
    );
  });
});
