import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';

const routes: Route[] = [
  { path: '', component: ContainerComponent }
];

/**
 * Work module
 * @export
 * class WorkModule
 */

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class DashboardModule { }
