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

A [Patronicity](https://www.patronicity.com/) é uma plataforma de financiamento colaborativo para projetos comunitários nos Estados Unidos.

Em 2023, a Patronicity decidiu renovar o site, que já tinha mais de dez anos. Recebi os layouts da nova identidade visual, mas ainda precisavam de ser organizados para o desenvolvimento.

O meu trabalho foi organizar estes layouts numa base para o design e o código, além de criar as páginas que ainda não tinham sido desenhadas.

{{< project-figure src="/images/patronicity-home-detail-mobile.jpg" desktop="/images/patronicity-home-detail.jpg" alt="Página inicial da Patronicity." caption="Página inicial da Patronicity." >}}

## Desenvolvimento

Comecei por definir os fundamentos no Figma, como cores, tipografia, espaçamentos e grelha. Com esta base, redesenhei as páginas seguindo os mesmos padrões e documentei os fundamentos, componentes e módulos antes de começar o código.

Organizei a biblioteca em três partes:

- **Fundamentos:** cores, tipografia, grelha, espaçamentos, logótipo e ícones.
- **Componentes:** elementos reutilizáveis, como botões, campos de formulário e cards.
- **Módulos:** conjuntos de componentes que formam secções das páginas.

{{< project-figure src="/images/patronicity-blockquote.jpg" alt="Estilos de citação." caption="Estilos de citação." >}}

O site continuou a usar AngularJS e PHP, pelo que desenvolvi a biblioteca de estilos em Sass puro, para aplicar a nova identidade à estrutura que já existia. Como os estilos ficaram separados do framework, esta base também pode ser reaproveitada numa futura mudança de tecnologia.

Depois, implementei os componentes a partir do que havia organizado no Figma. Assim, as páginas passaram a partilhar os mesmos estilos e elementos.

{{< project-figure src="/images/patronicity-project-card-mobile.jpg" desktop="/images/patronicity-project-card.jpg" alt="Cards de projetos." caption="Cards de projetos." >}}

## Construção das páginas

Também desenhei blocos que poderiam ser reaproveitados em diferentes páginas, como os de estatísticas, contacto e projetos. As novas páginas podiam ser montadas combinando estes blocos.

Algumas páginas foram desenhadas em conjunto com o designer. Outras criei a partir dos componentes da biblioteca, como os ecrãs de login e registo, o fluxo de checkout e a [página de programas](https://www.patronicity.com/programs).

{{< project-figure src="/images/patronicity-sign-in-detail.jpg" desktop="/images/patronicity-sign-in.jpg" alt="Página de login." caption="Página de login." >}}

Os mesmos módulos também aparecem noutras páginas, como a de [parceiros](https://www.patronicity.com/partners). A ideia era que essa organização continuasse a ajudar depois da renovação do site, dando uma base para criar novas páginas e manter as existentes.
