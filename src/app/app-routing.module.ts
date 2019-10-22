import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditShipmentComponent } from './edit-shipment/edit-shipment.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path: 'editshipment',component: EditShipmentComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
