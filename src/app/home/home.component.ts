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
  // {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
{ Id:1 ,client:'Frank M canton',created:'07-27-2020',modified:'08-29-20',feedback:'true'},
{ Id:1 ,client:'Frank M canton',created:'07-27-2020',modified:'08-29-20',feedback:'true'}
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
    {value: 'steak-0', viewValue: 'TCS'},
    {value: 'pizza-1', viewValue: 'Infosys'},
    {value: 'tacos-2', viewValue: 'Wipro'}
  ];
  displayedColumns: string[] = ['Id', 'client', 'created', 'modified','feedback'];
  dataSource = ELEMENT_DATA;

}
