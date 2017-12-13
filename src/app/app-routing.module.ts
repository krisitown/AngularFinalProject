import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { RegisterFormComponent } from './authentication/register-form/register-form.component';
import { LoginFormComponent } from './authentication/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './authentication/logout-component/logout.component';
import { AllPostsComponent } from './components/post/all-posts/all-posts.component';
import { CreatePostComponent } from './components/post/create-post/create-post.component';
import { ShowPostComponent } from './components/post/show-post/show-post.component';

// Guards
import { AuthGuard } from './guards/auth.guard.service';

const routes : Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [ AuthGuard ], component: HomeComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'posts', component: AllPostsComponent },
  { path: 'posts/new', component: CreatePostComponent},
  { path: 'posts/:id', component: ShowPostComponent}
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutesModule {  }
