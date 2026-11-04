---
title: "TAP Air Portugal"
subtitle: "Documentação e desenvolvimento de um design system"
summary: "Desenvolvimento e documentação do design system da TAP."
year: "2024"
location: "🇵🇹 Portugal"
image: /images/covers/tap-c568d9b7b9.jpg
thumbBg: "#f5fff0"
website: https://www.flytap.com
stack: ["Angular", "React", "TypeScript", "Storybook", "HTML"]
weight: 1
---

Quando comecei a trabalhar na [TAP](https://www.flytap.com), uma das coisas que me chamou a atenção foi que já existiam componentes no Figma, mas faltava uma documentação que orientasse sua implementação no código.

A cada nova aplicação, os componentes eram desenvolvidos de novo, o que gerava diferenças na aparência e no comportamento. Uma correção feita em um projeto nem sempre chegava aos outros. Aos poucos, as aplicações também se distanciavam do que estava definido no Figma.

> *Se não está documentado, não existe.*

Ouvi essa frase do meu primeiro mentor de programação, que era fã da [Miriam Suzanne, da OddBird](https://www.oddbird.net/authors/miriam/). Ele repetia tanto que virou meu mantra também. Sem documentação, quem vem depois tem que adivinhar como as coisas funcionam. Tudo fica mais fácil com um manual de instruções.

Minha proposta foi criar um design system que reunisse as orientações de design e os componentes em código. Assim, as equipes poderiam reutilizar o que já estava pronto, sem começar do zero a cada projeto.

## Desenvolvimento

Comecei organizando os fundamentos do projeto: cores, tipografia, espaçamentos, grid e orientações de marca. A partir dessas definições, estruturei os tokens usados nos estilos e componentes.

Com essa base definida, passei para a documentação dos componentes e módulos, incluindo suas variações e estados. Para cada um, era preciso explicar quando usá-lo, como implementá-lo e quais regras de acessibilidade e orientações de conteúdo seguir.

Organizei o projeto em seis partes:

- **Biblioteca Sass:** concentra os estilos compartilhados.
- **Repositório de assets:** reúne imagens e scripts de uso comum.
- **Documentação principal:** reúne as orientações de marca, os fundamentos e as regras de acessibilidade, além dos links para as documentações de cada biblioteca.
- **Biblioteca Angular:** oferece componentes para aplicações em Angular.
- **Biblioteca de Web Components:** oferece componentes que não dependem de um framework específico.
- **Biblioteca React:** oferece componentes para aplicações em React.

As três bibliotecas de componentes usam a mesma base de estilos. A implementação muda conforme a tecnologia, mas a aparência e os comportamentos devem ser os mesmos.

## Documentação e componentes em funcionamento

Escolhi Hugo para o portal de documentação. Ele permitiu organizar as orientações em um site estático, com conteúdo em Markdown e controle de versão, sem depender de uma plataforma paga. Para a referência técnica dos estilos, usei SassDoc.

Cada biblioteca de componentes tem sua própria documentação no Storybook, onde é possível explorar as variações e testar os componentes isoladamente.

Meu objetivo foi aproximar o que estava definido no design do que era entregue no código, criando uma estrutura que as equipes pudessem usar, manter e continuar evoluindo.

Infelizmente, não posso mostrar nossa documentação interna por ser material confidencial. As imagens são do [site da TAP](https://www.flytap.com/pt-pt).

{{< responsive-figure src="/images/tap-public-home-mobile.png" desktop="/images/tap-public-home-desktop.png" alt="Cabeçalho e destaque da página inicial do site da TAP" caption="Página inicial da TAP." >}}

{{< responsive-figure src="/images/tap-public-booking-mobile.png" desktop="/images/tap-public-booking-desktop.png" alt="Formulário de reserva do site da TAP" caption="Formulário de reserva da TAP." >}}
