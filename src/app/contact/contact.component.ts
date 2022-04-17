import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  info: any;
  constructor(private dataService: DataserviceService) {}

  ngOnInit(): void {
    this.dataService.getContact().subscribe((info: any) => {
      this.info = info;
      console.log(1,info)
    });
  }
}
