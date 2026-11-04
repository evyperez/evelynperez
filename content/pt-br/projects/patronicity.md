---
title: "Patronicity"
subtitle: "Rebranding & Design System"
summary: "Organização da nova identidade visual em componentes e páginas para a Patronicity."
year: "2023–2024"
location: "🇺🇸 EUA"
image: /images/covers/patronicity-e178c3f4f8.jpg
thumbBg: "#fffaf4"
website: https://www.patronicity.com
stack: ["AngularJS", "PHP", "Figma", "Sass"]
weight: 2
---

A [Patronicity](https://www.patronicity.com/) é uma plataforma de financiamento coletivo para projetos comunitários nos Estados Unidos.

Em 2023, a Patronicity decidiu renovar o site, que já tinha mais de dez anos. Recebi os layouts da nova identidade visual, mas eles ainda precisavam ser organizados para o desenvolvimento.

Meu trabalho foi organizar esses layouts em uma base para o design e o código, além de criar as páginas que ainda não tinham sido desenhadas.

{{< project-figure src="/images/patronicity-home-detail-mobile.jpg" desktop="/images/patronicity-home-detail.jpg" alt="Página inicial da Patronicity." caption="Página inicial da Patronicity." >}}

## Desenvolvimento

Comecei definindo os fundamentos no Figma, como cores, tipografia, espaçamentos e grid. Com essa base, redesenhei as páginas seguindo os mesmos padrões e documentei os fundamentos, componentes e módulos antes de começar o código.

Organizei a biblioteca em três partes:

- **Fundamentos:** cores, tipografia, grid, espaçamentos, logo e ícones.
- **Componentes:** elementos reutilizáveis, como botões, campos de formulário e cards.
- **Módulos:** conjuntos de componentes que formam seções das páginas.

{{< project-figure src="/images/patronicity-blockquote.jpg" alt="Estilos de citação." caption="Estilos de citação." >}}

O site continuou usando AngularJS e PHP, então desenvolvi a biblioteca de estilos em Sass puro, para aplicar a nova identidade à estrutura que já existia. Como os estilos ficaram separados do framework, essa base também pode ser reaproveitada em uma futura mudança de tecnologia.

Depois, implementei os componentes a partir do que havia organizado no Figma. Assim, as páginas passaram a compartilhar os mesmos estilos e elementos.

{{< project-figure src="/images/patronicity-project-card-mobile.jpg" desktop="/images/patronicity-project-card.jpg" alt="Cards de projetos." caption="Cards de projetos." >}}

## Construindo as páginas

Também desenhei blocos que poderiam ser reaproveitados em diferentes páginas, como os de estatísticas, contato e projetos. As novas páginas podiam ser montadas combinando esses blocos.

Algumas páginas foram desenhadas em conjunto com o designer. Outras eu criei a partir dos componentes da biblioteca, como as telas de login e cadastro, o fluxo de checkout e a [página de programas](https://www.patronicity.com/programs).

{{< project-figure src="/images/patronicity-sign-in-detail.jpg" desktop="/images/patronicity-sign-in.jpg" alt="Página de login." caption="Página de login." >}}

Os mesmos módulos também aparecem em outras páginas, como a de [parceiros](https://www.patronicity.com/partners). A ideia era que essa organização continuasse ajudando depois da renovação do site, dando uma base para criar novas páginas e manter as existentes.
