import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'How satisfied are you with this application?', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'How satisfied are you with this clinic?', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'How satisfied are you with our clients?'  , weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'How was your overall quaility of the application?'
  , weight: 9.0122, symbol: 'Be'},

];

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
    //try
    
  constructor(private ngb:NgbModule) { }

  ngOnInit(): void {
 
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

isRated=false;
changeRating(){
  this.isRated=true;
}
currentRate = 0;

}
