import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit, OnDestroy {
  slides = [
    { image: '../../../assets/images/carrossel1.png', alt: 'Slide 1' },
    { image: '../../../assets/images/carrossel2.png', alt: 'Slide 2' },
    { image: '../../../assets/images/carrossel3.png', alt: 'Slide 3' },
    { image: '../../../assets/images/carrossel4.png', alt: 'Slide 4' },
    { image: '../../../assets/images/carrossel5.png', alt: 'Slide 5' },
  ];

  currentSlide = 0;
  autoSlideInterval: any;
  visibleSlides = 3; // Visibilidade de 3 slides, para dar o efeito de carrossel infinito

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }

  prevSlide() {
    // Faz a rotação infinita ao clicar na seta "prev"
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    // Faz a rotação infinita ao clicar na seta "next"
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Troca de slide a cada 3 segundos
  }
}
