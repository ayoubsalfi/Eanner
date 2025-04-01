import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Page1Component } from './page1/page1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PurposeComponent } from './purpose/purpose.component';
import { InnovationComponent } from './innovation/innovation.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';
import { StrategyComponent } from './strategy/strategy.component';
import { ContactComponent } from './contact/contact.component';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { PartnersComponent } from './partners/partners.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { BuildingComponent } from './building/building.component';
import { GreenComponent } from './green/green.component';
import { InstallationElectriqueComponent } from './installation-electrique/installation-electrique.component';
import { CarrerComponent } from './carrer/carrer.component';
import { FinanceComponent } from './finance/finance.component';
import { SupportComponent } from './support/support.component';
import { EclairageComponent } from './eclairage/eclairage.component';
import { SecuriteComponent } from './securite/securite.component';
import { EntretienComponent } from './entretien/entretien.component';
import { DistributionComponent } from './distribution/distribution.component';
import { AutomationComponent } from './automation/automation.component';
import { SurveillanceComponent } from './surveillance/surveillance.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { PompageComponent } from './pompage/pompage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Page1Component,
    FooterComponent,
    AboutUsComponent,
    PurposeComponent,
    InnovationComponent,
    TechnologiesComponent,
    SustainabilityComponent,
    StrategyComponent,
    ContactComponent,
    AffiliateComponent,
    PartnersComponent,
    AgricultureComponent,
    IndustrialComponent,
    BuildingComponent,
    GreenComponent,
    InstallationElectriqueComponent,
    CarrerComponent,
    FinanceComponent,
    SupportComponent,
    EclairageComponent,
    SecuriteComponent,
    EntretienComponent,
    DistributionComponent,
    AutomationComponent,
    SurveillanceComponent,
    MaintenanceComponent,
    PompageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
