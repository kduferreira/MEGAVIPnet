import { Component } from '@angular/core';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css'],
})
export class ColaboradoresComponent {
  empresas = [
    { nome: 'Empresa 1', logo: 'assets/images/empresa1.png' },
    { nome: 'Empresa 2', logo: 'assets/images/empresa2.png' },
    { nome: 'Empresa 3', logo: 'assets/images/empresa3.png' },
    { nome: 'Empresa 4', logo: 'assets/images/empresa4.png' },
    { nome: 'Empresa 5', logo: 'assets/images/empresa5.png' },
  ];
}
