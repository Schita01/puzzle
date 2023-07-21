import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
const routes: Routes = [
  {path: '', component: GamesComponent}
]

@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    RouterModule.forChild(routes), 
    CommonModule,
  ],
  providers: [],
})
export class GamesModule { }
