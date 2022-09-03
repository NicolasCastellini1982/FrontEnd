import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RedesMenuComponent } from './components/redes-menu/redes-menu.component';
import { LoginBotonComponent } from './components/login-boton/login-boton.component';
import { LogoComponent } from './components/logo/logo.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { HysComponent } from './components/hys/hys.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RedesMenuComponent,
    LoginBotonComponent,
    LogoComponent,
    PresentacionComponent,
    SobremiComponent,
    HysComponent,
    ExperienciaComponent,
    FooterComponent,
    ContactoComponent,   
    HomeComponent,
    LoginComponent,  
    NewExperienciaComponent, 
    EditExperienciaComponent, 
    EducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
