import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'programs',
    loadChildren: () =>
      import('./modules/program/program.module').then((m) => m.ProgramModule),
  },
  {
    path: '**',
    redirectTo: '/programs',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
