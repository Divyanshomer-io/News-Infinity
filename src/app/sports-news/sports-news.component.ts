import { Component, OnInit } from '@angular/core';
import { TsnewsapiService } from '../service/tsnewsapi.service';
@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit{
  sportsNews: any= [];
  constructor(private api: TsnewsapiService) { }
  ngOnInit(): void {
    this.api.getSportNews().subscribe((result)=>{
      console.log(result);
      this.sportsNews = result.articles;
    })
      
  }

}
