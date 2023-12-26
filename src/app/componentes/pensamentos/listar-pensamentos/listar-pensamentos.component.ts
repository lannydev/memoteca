import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.scss']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;

  constructor(private service: PensamentoService){

  }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) =>{
      this.listaPensamentos = listaPensamentos
    })
  }

  carregarMaispensamentos(){
    this.service.listar(++this.paginaAtual)
      .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos);
        if(!listaPensamentos.length){
          this.haMaisPensamentos = false;
        }
    })
  }

}
