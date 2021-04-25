import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images = ['/assets/img/slide1.jpg', '/assets/img/slide2.jpg', '/assets/img/slide3.jpg', '/assets/img/slide4.jpg']
  constructor() { }

  ngOnInit(): void {
  }

}
