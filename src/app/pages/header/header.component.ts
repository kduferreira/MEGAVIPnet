import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header-main.responsive.css'], // Adicione o CSS responsivo aqui
})
export class HeaderComponent {
  scrollToPlanos() {
    const planosSection = document.getElementById('planos');
    if (planosSection) {
      planosSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToContatos() {
    const contatosSection = document.getElementById('contatos');
    if (contatosSection) {
      contatosSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
