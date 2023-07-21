import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/foooter.component';
import { HeaderComponent } from './header/header.component';
import { loaderComponent } from './loader/loader.component';
import { AbonimentsModule } from './modules/aboniments/aboniments.module';
import { AboutUsModule } from './modules/about-us/about-us.module';
import { GamesModule } from './modules/games/games.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    loaderComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AbonimentsModule,
    AboutUsModule,
    GamesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  