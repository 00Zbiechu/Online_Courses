import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ScrollTopModule } from 'primeng/scrolltop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorHandlerService } from './error/error-handler.service';
import { AuthorizationInterceptor } from './interceptors/authorization/authorization.interceptor';
import { ErrorInterceptor } from './interceptors/error/error.interceptor';
import { ForbiddenInterceptor } from './interceptors/forbidden/forbidden.interceptor';
import { FooterModuleModule } from './modules/footer-module/footer-module.module';
import { HeaderModuleModule } from './modules/header-module/header-module.module';
import { LoaderModuleModule } from './modules/loader-module/loader-module.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MessagesModule,
    ScrollTopModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModuleModule,
    FooterModuleModule,
    LoaderModuleModule
  ],
  providers: [
    MessageService,
    ErrorHandlerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ForbiddenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
