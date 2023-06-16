import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SlideContentComponent } from './components/slide-content/slide-content.component';
import { ContentListComponent } from './components/content-list/content-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideContentComponent,
    ContentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
