import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  getCatFacts(){
    return this.http.get("https://cat-fact.herokuapp.com/facts");
  }
  getRandomDog(){
    return this.http.get("https://dog.ceo/api/breeds/image/random");
  }

  //#region start and stop loader
  startLoader(){
    this.ngxService.start();
  }
  stopLoader(){
    this.ngxService.stop();
  }
  //#endregion
  constructor(private http:HttpClient, private ngxService: NgxUiLoaderService) { }
}
