import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailcoreComponent } from './detailcore/detailcore.component';
import { TabbuttonComponent } from './tabbutton/tabbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailcoreComponent,
    TabbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
