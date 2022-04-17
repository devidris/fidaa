import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  value:string = 'Product'

  constructor() { }


  onChange(value:any) {
    // this.value = value;
    console.log(value)
}

  ngOnInit(): void {
  }

}
