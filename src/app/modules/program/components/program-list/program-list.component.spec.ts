import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { By } from '@angular/platform-browser';

import { ProgramListComponent } from './program-list.component';
import { ProgramFiltersComponent } from '../program-filters/program-filters.component';
import { ProgramCardComponent } from '../program-card/program-card.component';

import { ProgramListFilters } from '../../models/program-list-query-params';

import { ProgramService } from '../../services/program.service';
import { ProgramServiceMock } from '../../mocks/program.service.mock';

describe('ProgramListComponent', () => {
  let component: ProgramListComponent;
  let fixture: ComponentFixture<ProgramListComponent>;
  let de: DebugElement;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProgramListComponent,
        ProgramFiltersComponent,
        ProgramCardComponent,
      ],
      providers: [
        {
          provide: ProgramService,
          useClass: ProgramServiceMock,
        },
      ],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    router = de.injector.get(Router);
    route = de.injector.get(ActivatedRoute);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show filters on the left', () => {
    const filtersDe: DebugElement[] = de.queryAll(
      By.css('.program-sub-filter-title')
    );

    expect(filtersDe.length).toBe(3);
    expect(filtersDe[0].nativeElement.innerText).toBe('Launch Year');
  });

  it('should show program card in the main section', () => {
    const cardDe: DebugElement[] = de.queryAll(
      By.css('main .program-card-section')
    );

    expect(cardDe.length).toBe(1);

    const headingEl: HTMLHeadingElement = cardDe[0].query(
      By.css('.card-details h4')
    ).nativeElement;
    expect(headingEl.innerText).toBe('MissionName #1');
  });

  it('should change query params of the same route', () => {
    spyOn(router, 'navigate');
    const filtersDe: DebugElement[] = de.queryAll(
      By.css(`.program-filters section`)
    );

    // apply launch year filter
    const launchYearFilterEl: HTMLSpanElement = filtersDe[0].query(
      By.css('.program-sub-filter-value span')
    ).nativeElement;

    launchYearFilterEl.click();
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith([], {
      relativeTo: route,
      queryParams: new ProgramListFilters({ launchYear: '2006' }),
    });

    // remove launch year filter
    launchYearFilterEl.click();
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith([], {
      relativeTo: route,
      queryParams: new ProgramListFilters({}),
    });

    // apply successful launch filter
    const successfulLaunchFilterEl: HTMLSpanElement = filtersDe[1].query(
      By.css('.program-sub-filter-value span')
    ).nativeElement;

    successfulLaunchFilterEl.click();
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith([], {
      relativeTo: route,
      queryParams: new ProgramListFilters({ launchSuccess: 'true' }),
    });

    // apply successful launch and successful landing filters
    const successfulLandingFilterEl: HTMLSpanElement = filtersDe[2].query(
      By.css('.program-sub-filter-value span')
    ).nativeElement;

    successfulLandingFilterEl.click();
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith([], {
      relativeTo: route,
      queryParams: new ProgramListFilters({
        launchSuccess: 'true',
        landSuccess: 'true',
      }),
    });
  });
});
