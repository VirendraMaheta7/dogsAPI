import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.css']
})
export class CatFactsComponent implements OnInit {
//#region properties
lstCatFacts = [];
//#endregion
  //#region methods
  getCatFacts(){
    this._cS.startLoader();
    this._cS.getCatFacts().subscribe(res=>{
      if(res){
         this.lstCatFacts= res['all'];
         this._cS.stopLoader();
      }
    })
  }
  //#endregion
  constructor(private _cS:CommonService) { }

  ngOnInit(): void {
    this.getCatFacts();
  }

}
