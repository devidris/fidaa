import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  hero: any = [{ name: 'Lol' }];
  constructor(private dataService: DataserviceService) {}

  backgroundImage() {
    return `
      url(${this.hero[0].image})`;
  }
  ngOnInit(): void {
    this.dataService.getHero().subscribe((hero) => {
      this.hero = hero;
    });
  }
}
