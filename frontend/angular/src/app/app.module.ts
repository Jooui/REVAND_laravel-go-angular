import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HeaderComponent,SharedModule } from './shared';
import { LoginModalComponent } from './login/login-modal.component'
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome' 


@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginModalComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
