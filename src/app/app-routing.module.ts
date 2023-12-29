import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdmindashboardComponent } from './pages/admin/admindashboard/admindashboard.component';
import { UserDashboardComponent } from './pages/normal/user-dashboard/user-dashboard.component';
import { AdminGuard } from './myservice/adminguard.guard';
import { NormalGuard } from './myservice/normalguard.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';

const routes: Routes = [
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:"full"
  },
  {
    path:'',
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
    
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
  
  {
    path:'userdashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
