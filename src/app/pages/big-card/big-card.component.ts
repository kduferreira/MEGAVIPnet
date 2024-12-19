import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.css'],
})
export class BigCardComponent implements OnInit, OnDestroy {
  slides = [
    { image: '../../../assets/images/carrossel1.png', alt: 'Slide 1' },
    { image: '../../../assets/images/carrossel2.png', alt: 'Slide 2' },
    { image: '../../../assets/images/carrossel3.png', alt: 'Slide 3' },
  ];

  currentSlide = 0;
  autoSlideInterval: any;
  visibleSlides = 2; // Padrão para desktop (2 slides visíveis)

  ngOnInit() {
    this.updateVisibleSlides(); // Ajusta slides visíveis com base no tamanho da tela
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }

  prevSlide() {
    // Ajusta o índice considerando o total de slides (ciclo infinito)
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    // Ajusta o índice considerando o total de slides (ciclo infinito)
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Troca de slide a cada 3 segundos
  }

  @HostListener('window:resize', [])
  updateVisibleSlides() {
    const width = window.innerWidth;

    if (width <= 768) {
      this.visibleSlides = 1; // Apenas 1 slide visível para telas pequenas
    } else if (width <= 1200) {
      this.visibleSlides = 2; // 2 slides visíveis em telas médias
    } else {
      this.visibleSlides = 2; // 2 slides padrão para desktop
    }
  }
}
