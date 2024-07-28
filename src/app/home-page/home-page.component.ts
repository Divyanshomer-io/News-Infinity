import { Component, OnInit } from '@angular/core';
import { TsnewsapiService } from '../service/tsnewsapi.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  breakingnews: any=[];
  livemarket: any=[];
  weatherNews: any=[];
  riddles: any=[];
  show : boolean[] = Array(7).fill(false)
  cityName: string = '';
  lat:any;
  lon:any;
  stockData: any=[];
  TimeSeries:any;
  newCurrency: any;
  errorMessage: string | null = null;
  city: string='';
  airQuality: any=[];
  airQualityCO: any=[];
  airQualityNO2: any=[];
  airQualityO3: any=[];
  airQualitySO2: any=[];
  airQualityOA: any=[];
  constructor(private api: TsnewsapiService) { }
  ngOnInit(): void {
    
    this.api.tcHeadLines().subscribe((result)=>{
      console.log(result);
      this.breakingnews=result.articles;
    })
    
    
      this.api.getStockInfo().subscribe((result) => {
        console.log(result);
       this.livemarket=result;
    })

    this.api.getCoordinates("delhi").subscribe((result) => {
      console.log(result);
    
      if (result && result.length>0){
       this.lat=result[0].lat;
       this.lon=result[0].lon;
      
    
      this.api.getWeather(this.lat, this.lon).subscribe((result)=>{
        console.log(result);
        this.weatherNews=result;
      })}
    })
    this.api.getRiddle().subscribe((result) => {
      console.log(result);
      this.riddles=result;
    
  })
    //    this.api.getStock("WTI").subscribe((result)=>{
    //     console.log(result);
    //     // this.stockData=result['Meta Data'];
    //     // this.TimeSeries=result["Time Series (1min)"];
    //     // console.log(this.stockData);
    //     // console.log(this.TimeSeries);
        
    //    })
    // // this.api.getCoordinates("london").subscribe((result) => {
    // //   console.log(result);
    // //  this.weatherNews=result;
    // //   })
 }

 showanswer(index: number){
  this.show[index]=true;
 }
   currencyForm = new FormGroup({
    haveIt: new FormControl('', [Validators.required]),
    wantIt: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required])
   })
   onSubmit(){
    if (this.currencyForm.valid) {
      const haveIt: string = this.currencyForm.get('haveIt')?.value || '';
      const wantIt: string  = this.currencyForm.get('wantIt')?.value || '';
      const amount: string = this.currencyForm.get('amount')?.value || '';
          console.log(haveIt, wantIt, amount);
    this.api.getCurrency(haveIt ,wantIt, amount).subscribe((result)=>{
      console.log(result);
      this.newCurrency=result.new_amount;
    },
    (error) => {
      console.error('Error fetching currency data:', error);
      this.errorMessage ='This currency pair is for premium subscribers only.';
    })
    }
   }
 searchCity(){
  
  if (this.cityName){
  
this.api.getCoordinates(this.cityName).subscribe((result) => {
  console.log(result);

  if (result && result.length>0){
   this.lat=result[0].lat;
   this.lon=result[0].lon;
  

  this.api.getWeather(this.lat, this.lon).subscribe((result)=>{
    console.log(result);
    this.weatherNews=result;
  })}
})
  
  }
 
}
        
   getAir(){
    if (this.city){
      this.api.getAirQuality(this.city).subscribe((result)=>{
        console.log(result);
        this.airQuality=result;
        this.airQualityCO=result.CO;
        this.airQualityNO2=result.NO2;
        this.airQualityO3=result.O3;
        this.airQualitySO2=result.SO2;
        this.airQualityOA=result.overall_aqi;
      })
    }
   }
   
 

}
