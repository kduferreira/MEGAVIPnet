import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moreabout',
  templateUrl: './moreabout.component.html',
  styleUrls: ['./moreabout.component.css']
})
export class MoreaboutComponent implements OnInit {
  texts: string[] = ['Videos', 'Redes Sociais', 'Jogos', 'Filmes'];
  currentText: string = this.texts[0];
  private textIndex: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      this.currentText = this.texts[this.textIndex];
    }, 2000); // Alterna a cada 2 segundos
  }
}
