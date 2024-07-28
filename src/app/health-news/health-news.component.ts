import { Component, OnInit } from '@angular/core';
import { TsnewsapiService } from '../service/tsnewsapi.service';
@Component({
  selector: 'app-health-news',
  templateUrl: './health-news.component.html',
  styleUrls: ['./health-news.component.css']
})
export class HealthNewsComponent implements OnInit {
  healthNews: any= [];
  constructor(private api: TsnewsapiService ){ }
  ngOnInit(): void{
    this.api.getHealthNews().subscribe((result)=> 
      {console.log(result);
        this.healthNews = result.articles;
      })
  }


}
