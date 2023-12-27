import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss']
})
export class PensamentoComponent implements OnInit {


  @Input() pensamento: Pensamento = {

    id: 0,
    conteudo: 'I Love Angular',
    autoria:'Elaine Cruz',
    modelo: 'modelo3',
    favorito: false

  }


    constructor(private service: PensamentoService){

    }

    ngOnInit(): void {

    }

    larguraPensamento(): String {
      if(this.pensamento.conteudo.length >=250){
        return 'pensamento-g'
      }
      return 'pensamento-p'

    }

    mudarIconeFavorito():string{
      if(this.pensamento.favorito == false){
        return 'inativo'
      }
      return 'ativo'
    }

}
