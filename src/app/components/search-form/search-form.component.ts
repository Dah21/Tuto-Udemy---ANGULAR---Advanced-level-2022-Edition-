import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  showConnection=true;
  showBack=true;
  searchFlightForm: FormGroup;
  timeTheme: NgxMaterialTimepickerTheme = {
    container:{
      bodyBackgroundColor:'#3f51b5',
      buttonColor:'#fff'
    },
    dial:{
      dialBackgroundColor:'#B2CDD7',
      dialEditableBackgroundColor:'#000000'
    },
    clockFace:{
      clockFaceBackgroundColor:'#F1F1F1',
      clockHandColor:'#3f51b5',
      clockFaceTimeActiveColor:'#000000'
    }
  }
  constructor(private readonly sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.createSearchCriteresForm();
    this.searchFlightForm=this.sharedService.searchCriteresForm;
  }
  resetForm(form: FormGroup){
    form.reset();
  }
  searchFlight() {
    const searchFlightValues = this.searchFlightForm;
    console.log(searchFlightValues)
  }

  selectedFlightType(value){
    if(value==='Direct flight'){
      this.showConnection=false;
    }
    else{
      this.showConnection=true;
    }

  }

  selectedTripType(value){
    if(value === 'One-Way ticket'){
      this.showBack=false;
    }
    else{
      this.showBack=true;
    }

  }


}
