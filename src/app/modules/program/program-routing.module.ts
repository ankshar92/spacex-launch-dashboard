import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgramListComponent } from './components/program-list/program-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramListComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class ProgramRoutingModule {}