import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss']
})
export class PensamentoComponent implements OnInit {


  @Input() pensamento = {

    conteudo: 'I Love Angular',
    autoria:'Elaine Cruz',
    modelo: 'modelo3'

  }


    constructor(){

    }

    ngOnInit(): void {

    }

    larguraPensamento(): String {
      if(this.pensamento.conteudo.length >=250){
        return 'pensamento-g'
      }
      return 'pensamento-p'

    }

}
