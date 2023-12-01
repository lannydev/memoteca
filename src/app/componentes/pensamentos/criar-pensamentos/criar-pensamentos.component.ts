import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.scss']
})
export class CriarPensamentosComponent implements OnInit{

  pensamento: Pensamento = {
    conteudo: ' ',
    autoria: '',
    modelo: 'modelo1'

  }


  constructor(
    private service: PensamentoService,
    private router: Router
    ){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() => {
    this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])

  }

}
