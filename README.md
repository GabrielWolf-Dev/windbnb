<!-- Please update value in the {}  -->

<h1 align="center"><a href="https://windbnb-vue.vercel.app/" target="_blank">{ Windbnb }</a></h1>

<div align="center">
  Solução de um desafio na plataforma  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://windbnb-vue.vercel.app/">
      Demonstração
    </a>
    <span> | </span>
    <a href="https://github.com/GabrielWolf-Dev/windbnb">
      Solução
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/3JFYedSOZqAxYuOCNmYD">
      Desafio
    </a>
  </h3>
</div>

## Conteúdos do README

- [Overview](#overview)
  - [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [Aprendizados](#aprendizados)
- [Contato](#contato)

<!-- OVERVIEW -->

## Overview

<div style="width: 100%; text-align: center;">
  <img width="1280" heigth="720" src="https://github.com/GabrielWolf-Dev/windbnb/blob/main/src/assets/illustration-project.png?raw=true" alt="Screenshot" />
</div>

<div style="width: 100%; text-align: center; margin-top: 20px;">
  <img width="800" heigth="600" src="https://github.com/GabrielWolf-Dev/windbnb/blob/main/src/gif/windbnb-demo.gif?raw=true" alt="Screenshot" />
</div>

### Tecnologias

- [HTML 5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Vue 3](https://vuejs.org/)
  - [Vuex](https://vuex.vuejs.org/)
  - [Vue router](https://router.vuejs.org/)
- [commitlint](https://github.com/conventional-changelog/commitlint)
- [husky](https://github.com/typicode/husky)
- [commitizen](https://github.com/commitizen/cz-cli)
- [Yarn](https://classic.yarnpkg.com/en/)

## Funcionalidades

- Simples projeto que exibe os dados via uma requisição do arquivo json do repositório, o que dificultou um pouco para desenvolver algumas lógicas, pois não tinha as mesmas funcionalidades de uma API completa, mas para esta solução é o suficiente.
- Há um filtro de acordo com o local e quantidade de pessoas para achar alguma moradia e o usuário pode selecionar para ver mais detalhes da moradia pesquisada.
- Adicionei uma parte explicando sobre o projeto para treinar um pouco a parte de roteamento do Vue.
- Os dados foram gerenciados com o Vuex para facilitar e previnir de fazer prop drilling nos componentes.
- Padronizei os commits do projeto, seguindo o [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) com o auxílio das libs commitlint, husky e commitizen. Em futuros projetos eu pretendo seguir o mesmo padrão para deixar mais consistente os repositórios.

## Como rodar o projeto

Para clonar e rodar este projeto, você vai precisar do [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) (que contém o [npm](https://www.npmjs.com/)) instalados no seu computador. Segue os comandos abaixo:

```bash
# Instale o yarn(gerenciador de pacotes do projeto)
$ npm install yarn -g

# Clone este repositório
$ git clone git@github.com:GabrielWolf-Dev/windbnb.git

# Instale as dependências
$ yarn install

# Rode o app
$ yarn serve
```

## Aprendizados

- Vue.js na sua versão 3
- Vuex
- Vue router
- Padronizar os commits, seguindo conventional commits com as libs commitlint, husky e commitizen 

## Contato

- Website: [gwdev-portfolio](https://gwdev-portfolio.vercel.app/)
- GitHub: [@GabrielWolf-Dev](https://github.com/GabrielWolf-Dev)
- Linkedin: [@Gabriel Wolf](https://www.linkedin.com/in/gabriel-wolf-frontend/)
