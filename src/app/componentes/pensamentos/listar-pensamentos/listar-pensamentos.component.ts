import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.scss']
})
export class ListarPensamentosComponent implements OnInit {


  listaPensamentos = [
    // {

    //   conteudo: 'passo informações para o componente filho',
    //   autoria:'Componente Pai',
    //   modelo: 'modelo3'
    // },
    // {

    //   conteudo: 'Minha propriedade é decorada com o @input',
    //   autoria:'Componente Filho',
    //   modelo: 'modelo2'
    // }
  ];

  constructor(){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');

  }

}
