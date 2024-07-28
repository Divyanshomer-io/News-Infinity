import { Component, OnInit } from '@angular/core';
import {TsnewsapiService} from '../service/tsnewsapi.service'
@Component({
  selector: 'app-entertainment-news',
  templateUrl: './entertainment-news.component.html',
  styleUrls: ['./entertainment-news.component.css']
})
export class EntertainmentNewsComponent implements OnInit {

  entertainingNews: any= [];
  constructor(private api: TsnewsapiService ){ }
  ngOnInit(): void{
    this.api.entertainNews().subscribe((result)=> 
      {console.log(result);
        this.entertainingNews = result.articles;
      })
  }

}
