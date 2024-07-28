import { Component, OnInit } from '@angular/core';
import {TsnewsapiService} from '../service/tsnewsapi.service'
@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit{

  topHeadLinesData: any= [];
  constructor(private api: TsnewsapiService ){ }
  ngOnInit(): void{
    this.api.tcHeadLines().subscribe((result)=> 
      {console.log(result);
        this.topHeadLinesData = result.articles;
      })
  }

}
