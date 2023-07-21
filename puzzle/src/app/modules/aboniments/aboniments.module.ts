import { NgModule } from '@angular/core';
import { AbonimentsComponent } from './aboniments.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
const routes: Routes = [
    {path: '', component: AbonimentsComponent}
]

@NgModule({
  declarations: [
    AbonimentsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
})
export class AbonimentsModule { }
