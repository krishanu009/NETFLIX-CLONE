import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SlideContentComponent } from './components/slide-content/slide-content.component';
import { ContentListComponent } from './components/content-list/content-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Footer1Component } from './components/footer1/footer1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideContentComponent,
    ContentListComponent,
    NavbarComponent,
    Footer1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
