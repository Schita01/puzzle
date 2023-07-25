import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/foooter.component';
import { HeaderComponent } from './header/header.component';
import { loaderComponent } from './loader/loader.component';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    loaderComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    loaderComponent,
    SliderComponent
  ],
  providers: [],
})
export class SharedModule { }
