import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
info:any
  constructor(private dataService: DataserviceService) {}


  ngOnInit(): void {
    this.dataService.getContact().subscribe((info: any) => {
      this.info= info;
    });
  }
}
