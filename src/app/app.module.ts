import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import {HttpClientModule} from '@angular/common/http'
import { TsnewsapiService } from './service/tsnewsapi.service';
import { TechComponent } from './tech/tech.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppInfoComponent } from './app-info/app-info.component';
@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    TechComponent,
    EntertainmentNewsComponent,
    SportsNewsComponent,
    BusinessNewsComponent,
    HealthNewsComponent,
    HomePageComponent,
    AppInfoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TsnewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
