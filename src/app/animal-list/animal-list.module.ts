import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AnimalListComponent } from './animal-list.component';
import { MatCardModule } from '@angular/material/card';

const routes: Route[] = [
  { path: 'animal-list', component: AnimalListComponent },
];

@NgModule({
  declarations: [AnimalListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule],
  exports: [AnimalListComponent],
})
export class AnimalListModule {}
