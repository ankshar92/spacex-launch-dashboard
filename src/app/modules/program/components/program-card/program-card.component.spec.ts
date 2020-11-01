import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LaunchProgram } from '../../models/launch-program';
import { ProgramCardComponent } from './program-card.component';

describe('ProgramCardComponent', () => {
  let component: ProgramCardComponent;
  let fixture: ComponentFixture<ProgramCardComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have unique ID containing index', () => {
    component.id = 1;
    fixture.detectChanges();

    const missionIdEl: HTMLElement = de.query(By.css('.info-heading'))
      .nativeElement;
    expect(missionIdEl.id).toBe('mission-ids-1');
  });

  it('should show program details', () => {
    component.id = 1;
    component.program = new LaunchProgram({
      missionName: 'MissionName',
      flightNumber: 1,
      links: { missionPatchSmall: '' },
      missionId: ['1001'],
      launchYear: 2020,
      launchSuccess: true,
      rocket: { firstStage: { cores: [{ landSuccess: false }] } },
    });
    fixture.detectChanges();

    const headingEl: HTMLHeadingElement = de.query(By.css('.card-details h4'))
      .nativeElement;
    expect(headingEl.innerText).toBe('MissionName #1');
  });
});
