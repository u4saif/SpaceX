import { Component, OnInit } from '@angular/core';
import {LoadDataService} from '../load-data.service';

@Component({
  selector: 'app-component-tile',
  templateUrl: './component-tile.component.html',
  styleUrls: ['./component-tile.component.css']
})
export class ComponentTileComponent implements OnInit {
  devloper='Shaikh Saifuddin';
  dataArr;
  filteredArr;
  years=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
  constructor(dataService: LoadDataService){
    dataService.getUpdate();
    this.dataArr=dataService.getUpdate();

  }

  ngOnInit(): void {
  }

  filteryear(y){
    console.log(y);
     this.filteredArr=this.dataArr.filter(res=>{
      return res.launch_year==y;
    });
  }
  filterbyLaunch(value){
    console.log(value);
     this.filteredArr=this.dataArr.filter(res=>{
      return res.launch_success==value;
    });
  }
  filterbyLanding(value){
    console.log(value);
     this.filteredArr=this.dataArr.filter(res=>{
      return res.rocket.first_stage.cores[0].landing_intent==value;
    });
  }
}
