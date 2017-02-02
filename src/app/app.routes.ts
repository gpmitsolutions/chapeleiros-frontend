import { Routes } from '@angular/router';

import { AppComponent } from '../app/app.component';
import { PhysicalPersonComponent } from '../physicalPersonApp/component/physicalPerson.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'pessoaFisica', component: PhysicalPersonComponent }
];

