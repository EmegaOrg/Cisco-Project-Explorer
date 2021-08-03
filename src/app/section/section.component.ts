import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  providers: [NgbCarouselConfig] 
})
export class SectionComponent implements OnInit {
  images = ["https://cdn.thewirecutter.com/wp-content/uploads/2020/04/laptops-lowres-2x1--1024x512.jpg", "https://img.electronicdesign.com/files/base/ebm/electronicdesign/image/2021/02/GettyImages_155602278.601b1e4618a25.png?auto=format&fit=crop&h=556&w=1000&q=60", "https://st2.depositphotos.com/1518767/11513/i/600/depositphotos_115132928-stock-photo-shiny-wifi-icon-on-black.jpg"];
  constructor(config: NgbCarouselConfig) { 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
