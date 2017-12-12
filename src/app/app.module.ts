
// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationModule } from './authentication/auth.module';
import { AppRoutesModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AllPostsComponent } from './components/post/all-posts/all-posts.component';

// Services
import { AuthGuard } from './guards/auth.guard.service';
import { RequestService } from './services/request.service';
import { CreatePostComponent } from './components/post/create-post/create-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllPostsComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutesModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
