import { SearchTrainComponent } from './search-train/search-train.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path:"",component:HomeComponent},
  {path:"register",component:RegisterUserComponent},
  {path:"login",component:LoginComponent},
  {path:"adminLogin",component:AdminLoginComponent},
  {path:"searchTrain",component:SearchTrainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
