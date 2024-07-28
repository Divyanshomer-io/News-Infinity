import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TsnewsapiService {

  constructor(private   http: HttpClient) { }
  topHeadLineNews="https://newsapi.org/v2/top-headlines?country=in&pageSize=100&apiKey=5b5428a6ad18421887465efce0216efe"
  
  techNews="https://newsapi.org/v2/top-headlines?country=in&pageSize=100&category=technology&apiKey=5b5428a6ad18421887465efce0216efe"
  
  entNews="https://newsapi.org/v2/top-headlines?country=in&pageSize=100&category=entertainment&apiKey=5b5428a6ad18421887465efce0216efe"

  sportsNews="https://newsapi.org/v2/top-headlines?country=in&pageSize=100&category=sports&apiKey=5b5428a6ad18421887465efce0216efe"

  businessNews="https://newsapi.org/v2/top-headlines?country=in&pageSize=100&category=business&apiKey=5b5428a6ad18421887465efce0216efe"

  healthNews="https://newsapi.org/v2/top-headlines?country=in&pageSize=100&category=health&apiKey=5b5428a6ad18421887465efce0216efe"
  
  stocks="https://api-mintgenie.livemint.com/api-gateway/fundamental/api/v2/indices/home/getHomeIndices?forMarkets=false"

  maApiForNews="3YrcjgxQYAPki9zp7qnNlSb88HOb9443SK3PZepE";

  newsApi="https://api.thenewsapi.com/v1/news/headlines?locale=in&language=en"

  myapi="d3a0da1774f7bd135d89443cf44fdb9a"

  myapiForStock="3V6WYZQZ0UG0A8IF"

  myapi2="hzwei+XaFu6b9psPL4VEBg==7OLVD2WnOUiKU8AH";

  latitudeApi="http://api.openweathermap.org/geo/1.0/direct"

  weatherApi="https://api.openweathermap.org/data/2.5/weather"

  stockApi="https://www.alphavantage.co/query?";

  riddleApi="https://api.api-ninjas.com/v1/riddles?limit=7"

  currencyApi="https://api.api-ninjas.com/v1/convertcurrency";

  airApi="https://api.api-ninjas.com/v1/airquality?city="

  tcHeadLines(): Observable<any>{
    return this.http.get(this.topHeadLineNews);
  }
  technologyNews(): Observable<any>{
    return this.http.get(this.techNews);
  }
  entertainNews(): Observable<any>{
    return this.http.get(this.entNews);
  }
  getBusinessnNews(): Observable<any>{
    return this.http.get(this.businessNews)
  }
  getSportNews(): Observable<any>{
    return this.http.get (this.sportsNews);
  }
  getHealthNews(): Observable<any>{
    return this.http.get (this.healthNews);
  }
 
  getStockInfo(): Observable<any>{
    return this.http.get (this.stocks);
  }  

  getCoordinates(city : string) :  Observable<any>{
     const url=`${this.latitudeApi}?q=${city}&appid=${this.myapi}`;
     return this.http.get(url);
  }
   
  getWeather(lat: number, lon:number): Observable<any>{
    const url=`${this.weatherApi}?lat=${lat}&lon=${lon}&appid=${this.myapi}&units=metric`;
    return this.http.get(url);
  }

  getRiddle(){
    const headers = new HttpHeaders({
      'X-Api-Key': this.myapi2
    });
    return this.http.get(this.riddleApi, { headers });
  }

  getCurrency(have: string, want: string, amount: string): Observable<any>{
    const headers = new HttpHeaders({
      'X-Api-Key': this.myapi2
    });
    const url = `${this.currencyApi}?have=${have}&want=${want}&amount=${amount}`
    return this.http.get(url, { headers });
  }

  getAirQuality(city : string): Observable<any>{
    const headers = new HttpHeaders({
      'X-Api-Key': this.myapi2
    });
    const url=`${this.airApi}${city}`;
    return this.http.get(url, {headers});
  }

  getStock(symbol: string):Observable<any>{
    const url=`${this.stockApi}function=${symbol}&interval=dailyt&apikey=${this.myapiForStock}`
    return this.http.get(url);
    
  }

  
  } 

  