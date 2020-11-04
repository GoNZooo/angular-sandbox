import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {HomeComponent} from './home/home.component';
import {MainNavigationComponent} from './main-navigation/main-navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MainNavigationComponent, TabsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
