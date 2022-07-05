import { Component, OnInit } from '@angular/core';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  timeTheme: NgxMaterialTimepickerTheme = {
    container:{
      bodyBackgroundColor:'#3f51b5',
      buttonColor:'#fff'
    },
    dial:{
      dialBackgroundColor:'#B2CDD7',
      dialEditableBackgroundColor:'#000000'
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
