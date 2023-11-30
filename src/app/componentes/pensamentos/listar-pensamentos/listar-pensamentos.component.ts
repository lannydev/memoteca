import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.scss']
})
export class ListarPensamentosComponent implements OnInit {


  listaPensamentos: Pensamento[] = [];

  constructor(){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');

  }

}
