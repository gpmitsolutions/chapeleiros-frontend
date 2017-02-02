import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { PhysicalPersonModule } from 'physicalPersonApp/physicalPerson.module';
import { LegalPersonModule } from 'legalPerson/legalPerson.module';
import { FieldOfBusinessModule } from 'FieldOfBusiness/fieldOfBusiness.module';
import { PolicyPrivacyModule } from 'PolicyPrivacy/PolicyPrivacy.module';
import { ContactModule } from 'contact/contact.module';
import { CityModule } from 'city/city.module';
import { FaqModule } from 'faq/faq.module';
import { StateModule } from 'state/state.module';
import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PhysicalPersonModule,
    PolicyPrivacyModule,
    LegalPersonModule,
    FieldOfBusinessModule,
    ContactModule,
    CityModule,
    StateModule,
    FaqModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
