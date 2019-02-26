import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { ViewModule } from './view/view.module';
import { TestService } from './test.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressCardComponent,
    HomeComponent,
    SettingsComponent,
    PageNotFoundComponent,
    ProfileComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ViewModule,
    HttpClientModule,
    AppRoutingModuleModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
