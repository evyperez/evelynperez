---
translationKey: "why-hugo"
title: "Porque uso Hugo?"
date: 2026-07-17
draft: false
tags: ["hugo", "sites estáticos", "frontend"]
categories: ["dicas"]
description: "Velocidade, previsibilidade e liberdade de organização. Porque o Hugo continua a ser a minha escolha para portfólios, blogs e sites focados em conteúdo."
author: "Evelyn Perez"
image: "/images/blog/hugo-website.webp"
imageAlt: "Apresentação do Hugo no site oficial"
imageWidth: 936
imageHeight: 375
thumbnail: "/images/blog/hugo-thumbnail.webp"
thumbnailWidth: 640
thumbnailHeight: 480
---

Conheci o framework Hugo há quase 10 anos, por indicação de um colega de trabalho, o Sobral. Desde então, já experimentei vários frameworks e outras tecnologias, mas ele continua a ser a minha escolha para projetos pessoais, sites institucionais e outros projetos mais simples.

## O que tem de tão especial?

O Hugo gera páginas **estáticas**. Para explicar por que isso faz diferença, vale comparar com uma página **dinâmica**.

Numa página dinâmica, o conteúdo pode ser montado durante o acesso, de acordo com os dados ou com quem está a usar o site. É comum em lojas online, redes sociais e sistemas em que cada pessoa vê informações diferentes.

No Hugo, as páginas são geradas antes da publicação. Quando alguém acede ao site, os ficheiros já estão prontos para serem entregues ao navegador.

Esta **previsibilidade** é uma das coisas de que gosto: posso gerar e conferir o resultado antes de publicar. No final, tenho ficheiros **HTML, CSS e JavaScript** que posso alojar em diferentes serviços.

A rapidez também ajuda durante o desenvolvimento. Enquanto edito conteúdo ou templates, o servidor local atualiza a pré-visualização quase instantaneamente.

## Na hora de desenvolver

Também gosto de trabalhar com **YAML** e **Markdown**. Uso YAML nas configurações e Markdown para escrever o conteúdo, o que torna as atualizações mais práticas do que editar HTML.

Tenho liberdade para organizar pastas, layouts e templates conforme o projeto. Também consigo definir menus e parâmetros no ficheiro de configuração, sem precisar de seguir sempre a mesma organização.

## E o SEO?

Cada página tem um **front matter**, uma área de configuração no início do ficheiro Markdown. Ali defino **título**, **descrição**, **imagem**, **tags** e outras informações usadas nos motores de pesquisa e nas redes sociais. Assim, estes dados ficam junto do conteúdo e sob controlo de versões.

## E o custo?

Para servir estas páginas, não preciso de manter uma aplicação a correr no servidor nem uma base de dados. Posso publicar os ficheiros em serviços como:

- [Netlify](https://www.netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

Isto ajuda a manter o custo de alojamento baixo e reduz o trabalho com infraestrutura. A manutenção fica mais centrada no código e no conteúdo.

## E se o cliente quiser editar o conteúdo?

O Hugo trabalha com ficheiros Markdown, mas nem todos os clientes querem, ou sabem, usar Git para atualizar um site.

Já utilizei o **[Decap CMS](https://decapcms.org/)**, antigo Netlify CMS, em projetos para clientes. Permite editar o conteúdo através de uma interface visual, enquanto o Hugo continua a gerar as páginas estáticas.

Fico responsável pela estrutura e pela parte técnica, e quem cria o conteúdo consegue atualizar textos e imagens sem mexer no código. O histórico das alterações também ajuda quando precisamos de recuperar uma versão anterior.

## Então o Hugo serve para qualquer projeto?

Quando preciso de desenvolver uma aplicação com **autenticação**, **dados em tempo real** ou muita lógica no servidor, provavelmente escolherei outra tecnologia.

Para sites institucionais, portfólios e outros projetos em que o conteúdo é o principal, o Hugo continua a funcionar bem para mim.

<small>Este portfólio foi desenvolvido com Hugo. Todo o código está disponível em <a href="https://github.com/evyperez" target="_blank" rel="noopener">github.com/evyperez</a>.</small>
