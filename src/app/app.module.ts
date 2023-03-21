import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrerComponent } from './components/auth/registrer/registrer.component';
import { HomepagesComponent } from './components/pages/homepages/homepages.component';
import { NavbarComponent } from './components/Nav/navbar/navbar.component';
import { LoginPagesComponent } from './components/pages/login-pages/login-pages.component';
import { RegisterPagesComponent } from './components/pages/register-pages/register-pages.component';
import { NotFoundPagesComponent } from './components/pages/not-found-pages/not-found-pages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modulo personalisado para las listas
import { ListsModule } from './modules/lists/lists.module';
import { ListContactComponent } from './components/contacto/list-contact/list-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    TaskFormComponent,
    LoginComponent,
    RegistrerComponent,
    HomepagesComponent,
    NavbarComponent,
    LoginPagesComponent,
    RegisterPagesComponent,
    NotFoundPagesComponent,
    ListContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ListsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
