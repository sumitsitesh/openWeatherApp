import { Component ,OnInit} from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 Weather: any[];
 name='london';
 showTbl : boolean;
  constructor(private http:Http) { }
  ngOnInit(){
    this.findWeather();
    this.name=''
  }
//https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22
   findWeather(){
    // this.http.get('https://samples.openweathermap.org/data/2.5/forecast?q='+this.name+'&appid=1658573653f51d1315f0eee29083f88c')
    //  this.http.get('https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22')
  this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+this.name+'&appid=1658573653f51d1315f0eee29083f88c')
    .subscribe(response =>{
      // debugger;
      if(!response){
        this.showTbl = false
      }
      this.showTbl = true
      let result = response.json().list
      this.Weather = result;
     console.log(result);
    })
    this.name=''
  }
  
}
