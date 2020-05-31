import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-random-dog',
  templateUrl: './random-dog.component.html',
  styleUrls: ['./random-dog.component.css']
})
export class RandomDogComponent implements OnInit {
  randomDogObj: any;
  //#region methods
  getRandomDog() {
    this._cS.startLoader();
    this._cS.getRandomDog().subscribe(res => {
      if (res) {
        this.randomDogObj = res;
        this._cS.stopLoader();
      }
    })
  }
  downloadImage(url) {
    window.open(url, "_blank")
  }
  //#endregion
  constructor(private _cS: CommonService) { }

  ngOnInit(): void {
    this.getRandomDog();
  }

}
