<h1 align="center"> Memoteca </h1>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Comentários:
Validação onde não considera válido campo preenchido com espaços: 
  `Validators.pattern(/(.|\s)*\S(.|\s)*/)`

Validação que não permite que o campo fique vazio:
  `Validators.required`

## Mais Validators:
- `Validators.min()`: Validador que exige que o valor do controle seja maior ou igual ao número fornecido.
- `Validators.max()`: Validador que exige que o valor do controle seja verdadeiro. Este validador é comumente usado para caixas de seleção obrigatórias.
- `Validators.email()`: Validador que exige que o valor do controle passe em um teste de validação de email.
- `Validators.maxLength()`: Validador que exige que o comprimento do valor do controle seja menor ou igual ao tamanho máximo fornecido.
- `Validators.nullValidator()`: Validador de valores nulos.
- `Validators.composeAsync()`: Compõe vários validadores assíncronos em uma única função que retorna a união dos objetos de erro individuais para o controle fornecido.

Mais detalhes sobre a classe `Validators` voce encontra na [Documentação do Angular](https://angular.io/api/forms/Validators#description).




<p align="center">
<img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>
