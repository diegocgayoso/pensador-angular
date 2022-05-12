import { NgModule } from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import { Routes } from '@angular/router';
import { AddQuotationComponent } from './components/add-quotation/add-quotation.component';
import { LoginComponent } from './components/login/login.component';
import { QuotationsComponent } from './components/quotations/quotations.component';
import { AuthGuards } from './guards/auth.guards';

export const routes: Routes = [
  {path: '', redirectTo:'quotations', pathMatch:'full'},
  {path: 'quotations', component: QuotationsComponent, canActivate: [AuthGuards]},
  {path: 'form', component: AddQuotationComponent, canActivate: [AuthGuards]},
  {path: 'login', component: LoginComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
