import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrls: ['./botao-carregar-mais.component.scss']
})
export class BotaoCarregarMaisComponent implements OnInit {

  @Input() haMaisPensamentos: boolean = false;
  @Output() carregarMais: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  carregarMaisPensamentos() {
    this.carregarMais.emit();
  }

}
