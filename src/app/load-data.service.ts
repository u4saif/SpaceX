import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {

  constructor() { }
  getUpdate(){
    let api='https://api.spacexdata.com/v3/launches?limit=100';
    var newArr=[];

  fetch(api)
  .then(function(response){
    let data=response.json();
    return data;
  })
  .then(function(data){
          for(let i=0; i<100;i++){
            newArr.push((data[i]));

          }
          
  })
return newArr;
}
}

