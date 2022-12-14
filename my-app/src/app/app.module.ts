import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  

@NgModule({  
  declarations: [  
    AppComponent  
  ],  
  imports: [  
    BrowserModule,  
    AppRoutingModule,  
    SlickCarouselModule, BrowserAnimationsModule, NgbModule  
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  





