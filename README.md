# Desafio técnico Dev Full Stack

Este teste visa avaliar os conhecimentos e habilidades na nossa stack de tecnologias necessários para aplicação a oportunidade de desenvolvedor full stack aqui na [Sofit](https://sofit4.com.br).

## Objetivo do teste

O teste consiste em desenvolver uma pequena aplicação para um CRUD de veículos que deve conter pelo menos os seguintes itens:
- Listar veículos,
- Inserir um veículo,
- Visualizar um veículo,
- Editar um veículo, 
- Excluir um veículo.

Fique a vontade para construir a interface da forma que achar melhor, este será um dos pontos avaliados. 

Sugestão mínima de campos para cadastro: Placa, Marca, Modelo, Versão e Ano. Mas fique a vontade para adicionar o que achar pertinente.

As APIs também podem ser construídas utilizando o Design Pattern de seu interesse.

## Requisitos

Já deixamos o projeto iniciado com uma stack definida, basta fazer o fork do repositório e dar continuidade:
Front: [EmberJS](https://emberjs.com/)\
Back: [NodeJS + Express](https://expressjs.com/pt-br/)\
Banco: [MongoDB](https://www.mongodb.com/) ou [PostgreSQL](https://www.postgresql.org/). Utilize uma imagem do Docker de acordo com o banco escolhido:
- [Imagem Postgres](https://hub.docker.com/_/postgres)
- [Imagem Mongo](https://hub.docker.com/_/mongo)

Para listar marcas e modelos e carregar as opções em tela, você deve utilizar uma API pública que retorne as informações, encontramos [Esta aqui](https://deividfortuna.github.io/fipe/), mas se quiser utilizar outra, a vontade. O importante é avaliarmos como você realiza as requisições a APIs externas.

## Conclusão do desafio

Após realizar o desafio, enviar ao Github e nos enviar o link no e-mail dev.jobs@sofit4.com.br.

## O que vamos avaliar?

- Estruturação e organização do código,
- Funcionalidade da aplicação,
- Interface final da aplicação,
- Design Patterns,
- Itens adicionais não solicitados.

## Bonus
- Criação de testes automatizados (Backend).

---
# Configuração

    1. Clone o repositorio (git clone https://github.com/RosLuc/fullstackchallenge.git)
    2. Duplique o arquivo `.env.example` presente em cada diretório (backend, frontend) e altere seu nome para `.env` e preencha de acordo com suas configurações.
    3. Inicie o sistema beckend acessando o diretório `backend/` e executando: `docker-compose up`.
    4. Ainda no diretório `backend/` execute as migrations do sistema: `docker exec fullstackchallenge-container npm run migration:run`.
    5. Inicie o sistema frontend acessando o diretório `frontend/` e executando: `npm install && npm run start`
    5. Desfrute!

