import { Component, OnInit} from '@angular/core';
import {TsnewsapiService} from '../service/tsnewsapi.service'
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  techNews: any= [];
  constructor(private api: TsnewsapiService ){ }
  ngOnInit(): void{
    this.api.technologyNews().subscribe((result)=> 
      {console.log(result);
        this.techNews = result.articles;
      })
  }
  

}
