import { RegistrationServieService } from './../registration-servie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-train',
  templateUrl: './search-train.component.html',
  styleUrls: ['./search-train.component.css']
})
export class SearchTrainComponent implements OnInit {

  trains:any;
  source:any;
  destination:any;

  constructor(private service:RegistrationServieService) { }

  ngOnInit(): void {
    let response=this.service.getAllTrains();
    response.subscribe((data)=>this.trains=data);
  }

  searchTrain(source:any,destination:any){
    console.log(source,destination);
    let response=this.service.searchTrainByFromAndTo(source,destination);
    response.subscribe((data)=>this.trains=data);
  }

  reset(){
    let response=this.service.getAllTrains();
    response.subscribe((data)=>this.trains=data);
  }

}