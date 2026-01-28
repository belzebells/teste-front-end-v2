# Desafio Front-end - Econverse

Este projeto foi o resultado do teste técnico para a vaga de desenvolvedor front-end na Econverse. A proposta era criar uma landing page de e-commerce completa seguindo um layout do Figma, integrando com uma API de produtos e garantindo o funcionamento de componentes como carrosséis e modais.

## O Desafio
O maior foco aqui foi a fidelidade ao design e a organização do código. Diferente de soluções automatizadas ou geradores de código, este projeto foi construído "bit a bit", focando em entender como cada elemento se comporta no layout e garantindo que o CSS não quebrasse em diferentes resoluções.

## O que foi utilizado
* React com TypeScript para garantir que o código seja escalável e fácil de debugar.
* Sass (SCSS) estruturado para manter os estilos organizados e evitar repetições desnecessárias.
* Swiper.js para a vitrine de produtos, configurado para ser responsivo.
* Fetch API para buscar os dados dos produtos e renderizar dinamicamente na tela.

## Como eu estruturei
Optei por trabalhar com componentes bem divididos (Header, Banner, Vitrine, etc.) para que o código ficasse legível. Usei o pré-processador Sass para ter mais controle sobre as variáveis de cores e espaçamentos definidos no Figma, o que facilitou muito na hora de deixar o visual idêntico à referência.

## Instruções para rodar
Se quiser testar o projeto localmente:
1. Clone o repositório.
2. Certifique-se de estar na pasta raiz do projeto (onde está o package.json).
3. Rode `npm install` para baixar as dependências.
4. Rode `npm run dev` para subir o servidor local.