import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';


 export const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'seller-auth',
    component: SellerAuthComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
