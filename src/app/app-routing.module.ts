import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { TechComponent } from './tech/tech.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppInfoComponent } from './app-info/app-info.component';
const routes: Routes = [
{path: '', component: TopheadlineComponent},
{path: 'tech', component: TechComponent},
{path: 'entertainment', component: EntertainmentNewsComponent},
{path: 'business', component: BusinessNewsComponent},
{path: 'sports', component:SportsNewsComponent},
{path: 'health', component:HealthNewsComponent},
{path: 'topheadlines', component: TopheadlineComponent},
{path: 'home', component: HomePageComponent},
{path: 'info', component: AppInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
