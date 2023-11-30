import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.scss']
})
export class CriarPensamentosComponent implements OnInit{

  pensamento: Pensamento = {
    id: 1,
    conteudo: ' Aqui vai seu conteúdo',
    autoria: 'Aqui vai a autoria',
    modelo: 'modelo1'

  }


  constructor(){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  criarPensamento(){
    alert("Novo pensamento criado!")
  }

  cancelar(){
    alert("Operação cancelada!")
  }

}
