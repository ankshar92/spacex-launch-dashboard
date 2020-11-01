import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProgramFilter } from '../../models/program-filter';
import { ProgramFiltersComponent } from './program-filters.component';

describe('ProgramFiltersComponent', () => {
  let component: ProgramFiltersComponent;
  let fixture: ComponentFixture<ProgramFiltersComponent>;
  let de: DebugElement;

  const programFilters = [
    new ProgramFilter('Successful Launch', 'launchSuccess', [
      { label: 'True', value: true },
      { label: 'False', value: false },
    ]),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramFiltersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramFiltersComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    component.programFilters = programFilters;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show filter title', () => {
    const titleEl: HTMLParagraphElement = de.query(
      By.css(`#filter-${programFilters[0].key}`)
    ).nativeElement;
    expect(titleEl.innerText).toBe(programFilters[0].title);
  });

  it('should emit applied filters', () => {
    spyOn(component.applyProgramFilter, 'emit');
    const filterValueEl: HTMLSpanElement = de.query(
      By.css(`.program-sub-filter-value span`)
    ).nativeElement;

    // apply filter
    filterValueEl.click();
    expect(component.applyProgramFilter.emit).toHaveBeenCalled();
    expect(component.applyProgramFilter.emit).toHaveBeenCalledWith({
      [programFilters[0].key]: programFilters[0].filters[0].value,
    });

    // remove filter
    filterValueEl.click();
    expect(component.applyProgramFilter.emit).toHaveBeenCalled();
    expect(component.applyProgramFilter.emit).toHaveBeenCalledWith({});
  });
});
