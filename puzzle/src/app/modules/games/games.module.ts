import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
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
    CarouselModule,
  ],
  providers: [],
})
export class GamesModule { }
