import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

 
export const routes: Routes = [
    { path: '', redirectTo: '/Login', pathMatch: 'full' }, // Default route
  {path:'Login',component:LoginComponent},
  {path:'Home',component:HomeComponent},
  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }