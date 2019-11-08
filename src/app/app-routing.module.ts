import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditShipmentComponent } from './edit-shipment/edit-shipment.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/edit' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path: 'editshipment', component: EditShipmentComponent  },
  { path: 'edit', component: EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
