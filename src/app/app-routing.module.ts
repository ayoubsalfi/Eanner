import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
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

const routes: Routes = [
  { path: '', component: Page1Component },  // Définir Page1 comme page par défaut
  { path: 'about-us', component: AboutUsComponent },
  { path: 'purpose', component: PurposeComponent },
  { path: 'innovation', component: InnovationComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'sustainability', component: SustainabilityComponent },
  { path: 'strategy', component: StrategyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'affiliate', component: AffiliateComponent },
  { path: 'partners', component: PartnersComponent },
  {path: 'agriculture', component: AgricultureComponent},
  {path: 'industrial', component: IndustrialComponent},
  {path: 'building', component: BuildingComponent},
  {path: 'green', component: GreenComponent},
  {path:'installation',component: InstallationElectriqueComponent},
  {path:'carrer',component:CarrerComponent},
  {path:'finance',component:FinanceComponent},
  {path:'support',component:SupportComponent},
  {path:'eclairage',component:EclairageComponent},
  {path:'securite',component:SecuriteComponent},
  {path:'entretien',component:EntretienComponent},
  {path:'distribution',component:DistributionComponent},
  {path:'automation',component:AutomationComponent},
  {path:'surveillance',component:SurveillanceComponent},
  {path:'maintenance',component:MaintenanceComponent},
  {path:'pompage',component:PompageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

