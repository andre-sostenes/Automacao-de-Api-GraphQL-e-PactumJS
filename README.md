# Automação de API GraphQL com PactumJS

Este repositório contém testes automatizados para APIs (incluindo GraphQL) utilizando PactumJS e Mocha.

## Descrição

Exemplos e suítes de teste organizadas por tipo: testes GraphQL, testes de API REST e testes de contrato. O projeto usa PactumJS para fazer requisições e asserções e Mocha como runner de testes.

## Pré-requisitos

- Node.js (recomenda-se v14 ou superior)
- npm (ou yarn)

## Instalação

1. Clone o repositório:

   git clone https://github.com/andre-sostenes/Automacao-de-Api-GraphQL-e-PactumJS.git
   cd Automacao-de-Api-GraphQL-e-PactumJS

2. Instale as dependências:

   npm install

## Estrutura de pastas (esperada)

- test/graphql/     - testes relacionados a GraphQL
- test/api/         - testes de API REST
- test/contract/    - testes de contrato
- index.js          - ponto de entrada (se aplicável)

> Observação: ajuste os caminhos conforme necessário se você usar outra organização.

## Scripts úteis (definidos em package.json)

- npm run test
  - Executa todos os testes: mocha ./test/**/*test.js

- npm run test:gql
  - Executa apenas os testes de GraphQL: mocha ./test/graphql/*.test.js

- npm run test:api
  - Executa apenas os testes de API REST: mocha ./test/api/*.test.js

- npm run test:contract
  - Executa apenas os testes de contrato: mocha ./test/contract/*.test.js

## Como executar

- Rodar toda a suíte:

  npm run test

- Rodar apenas GraphQL:

  npm run test:gql

- Rodar um arquivo de teste específico (exemplo):

  npx mocha test/graphql/meuTeste.test.js

## Boas práticas

- Separe dados de teste e configurações (URLs, tokens) em variáveis de ambiente ou em um arquivo de configuração não comitado.
- Faça asserts claros e independentes por teste.
- Use antes/depois (hooks) do Mocha para setup/teardown.

## Contribuindo

1. Abra uma issue descrevendo a proposta ou bug.
2. Abra um PR com mudanças pequenas e focadas.
3. Garanta que os testes relevantes estejam passando.

## Autor

andre-sostenes

## Licença

ISC
