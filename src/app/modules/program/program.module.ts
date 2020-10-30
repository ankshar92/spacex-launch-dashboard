import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramRoutingModule } from './program-routing.module';

import { ProgramListComponent } from './components/program-list/program-list.component';
import { ProgramFiltersComponent } from './components/program-filters/program-filters.component';
import { ProgramCardComponent } from './components/program-card/program-card.component';

@NgModule({
  declarations: [
    ProgramListComponent,
    ProgramFiltersComponent,
    ProgramCardComponent,
  ],
  imports: [CommonModule, ProgramRoutingModule],
})
export class ProgramModule {}
