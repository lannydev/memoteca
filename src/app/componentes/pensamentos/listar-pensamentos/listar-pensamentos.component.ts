import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.scss']
})
export class ListarPensamentosComponent implements OnInit {


  listaPensamentos = [
    {

      conteudo: 'passo informações para o componente filho',
      autoria:'Componente Pai',
      modelo: 'modelo3'
    },
    {

      conteudo: 'Minha propriedade é decorada com o @input',
      autoria:'Componente Filho',
      modelo: 'modelo2'
    },

    {

      conteudo: 'É realmente verdade que gratidão gera gratidão e lamúria gera lamúria. Isto acontece porque o coração agradecido comunica-se com Deus, e o queixoso relaciona-se com Satanás. Assim, quem vive agradecendo, torna-se feliz; quem vive se lamuriando, caminha para a infelicidade. A frase "Alegrem-se que virão coisas alegres", expressa uma grande verdade.',
      autoria:'Meishu Sama',
      modelo: 'modelo1'
    }

  ];

  constructor(){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');

  }

}
