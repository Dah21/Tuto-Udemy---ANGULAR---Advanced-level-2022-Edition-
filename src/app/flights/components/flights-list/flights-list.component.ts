import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Flight } from 'src/app/shared/models/flight/flight.model';

const ELEMENT_DATA : Flight[] = [{
  idFlight: 1,
  companyName:'Air France',
  flightType:'Direct flight',
  travelType: 'Round trip',
  departureDate:new Date(),
   arrivalDate:new Date(),
   backDate:new Date(),
   departureLocation:'Paris',
  arrivalLocation:'London',
  flightDuration:new Date(),
  connectionDuration:new Date(),
  aircraftType:'Airbas',
}
]
@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})

export class FlightsListComponent implements OnInit {

  @ViewChild(MatPaginator, {static:true}) paginator:MatPaginator;
  @ViewChild(MatSort, {static:true}) matSort:MatSort;

  displayedColumns:string[]=[
    'idFlight','companyName','flightType','travelType','departureDate',
     'arrivalDate', 'backDate', ,
    'departureLocation','arrivalLocation','flightDuration','connectionDuration',
    'aircraftType','select'
  ];

  flights=new MatTableDataSource<Flight>(ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
    this.flights.paginator= this.paginator;
    this.flights.sort=this.matSort

  }

}
