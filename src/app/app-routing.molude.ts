import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AddQuotationComponent } from './components/add-quotation/add-quotation.component';
import { LoginComponent } from './components/login/login.component';
import { QuotationsComponent } from './components/quotations/quotations.component';

export const routes: Routes = [
  {path: '', redirectTo:'quotations', pathMatch:'full'},
  {path: 'quotations', component: QuotationsComponent},
  {path: 'form', component: AddQuotationComponent},
  {path: 'login', component: LoginComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
