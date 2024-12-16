import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  texts: string[] = ['Computadores', 'Smart TVs', 'Videogame'];
  currentText: string = this.texts[0];
  intervalId: any;

  ngOnInit(): void {
    // Alterna o texto a cada 2 segundos
    let index = 0;
    this.intervalId = setInterval(() => {
      index = (index + 1) % this.texts.length;
      this.currentText = this.texts[index];
    }, 2000);
  }

  ngOnDestroy(): void {
    // Limpa o intervalo ao destruir o componente
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
