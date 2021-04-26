import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images = ['/assets/img/slide1.png', '/assets/img/slide2.png', '/assets/img/slide3.png', '/assets/img/slide4.png']
  constructor() { }

  ngOnInit(): void {
  }

}
