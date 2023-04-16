import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path : '', component : MainPageComponent},
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


