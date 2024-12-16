import { Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  slides = [
    {
      image: '../../../assets/images/carrossel1.png',
      alt: 'Slide 1',
    },
    {
      image: '../../../assets/images/carrossel2.png',
      alt: 'Slide 2',
    },
    {
      image: '../../../assets/images/carrossel3.png',
     
      alt: 'Slide 3',
    },
  ];

  currentSlide = 0;

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}
