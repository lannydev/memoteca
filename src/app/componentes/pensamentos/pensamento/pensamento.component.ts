import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss']
})
export class PensamentoComponent implements OnInit {


pensamento = {

  conteudo: 'I Love Angular',
  autoria:'Elaine Cruz',
  modelo: 'modelo3'

}


  constructor(){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
