import { Component,OnInit } from '@angular/core';
import { TsnewsapiService } from '../service/tsnewsapi.service';
@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit{
    businessNews: any =[];
    constructor( private api: TsnewsapiService){}
    ngOnInit(): void {
      this.api.getBusinessnNews().subscribe((result)=>{
        console.log(result);
        this.businessNews = result.articles;
      })

        
    }
}
