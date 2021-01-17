import { Component, OnInit } from '@angular/core';


//INTERFACE
interface Client {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {

  Id:number,
  client:string,
  created:string,
  modified:string,
  feedback:string
}


const ELEMENT_DATA: PeriodicElement[] = [

{ Id:1 ,client:'Frank M canton',created:'07-27-2020',modified:'08-29-20',feedback:''}
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'task';
  clients: Client[] = [
    {value: 'TCS', viewValue: 'TCS'},
    {value: 'infosys', viewValue: 'Infosys'},
    {value: 'Wipro', viewValue: 'Wipro'}
  ];
  displayedColumns: string[] = ['Id', 'client', 'created', 'modified','feedback'];
  dataSource = ELEMENT_DATA;

}
