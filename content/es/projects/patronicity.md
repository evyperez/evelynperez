---
title: "Patronicity"
subtitle: "Rebranding & Design System"
summary: "Organización de la nueva identidad visual en componentes y páginas para Patronicity."
year: "2023–2024"
location: "🇺🇸 EE. UU."
image: /images/covers/patronicity-e178c3f4f8.jpg
thumbBg: "#fffaf4"
website: https://www.patronicity.com
stack: ["AngularJS", "PHP", "Figma", "Sass"]
weight: 2
---

[Patronicity](https://www.patronicity.com/) es una plataforma de financiación colectiva para proyectos comunitarios en Estados Unidos.

En 2023, Patronicity decidió renovar su web, que ya tenía más de diez años. Recibí los diseños de la nueva identidad visual, pero todavía había que organizarlos para el desarrollo.

Mi trabajo fue organizar esos diseños en una base para el diseño y el código, además de crear las páginas que aún no se habían diseñado.

{{< project-figure src="/images/patronicity-home-detail-mobile.jpg" desktop="/images/patronicity-home-detail.jpg" alt="Página de inicio de Patronicity." caption="Página de inicio de Patronicity." >}}

## Desarrollo

Empecé definiendo los fundamentos en Figma, como colores, tipografía, espaciados y retícula. Con esa base, redibujé las páginas siguiendo los mismos criterios y documenté los fundamentos, componentes y módulos antes de empezar con el código.

Organicé la biblioteca en tres partes:

- **Fundamentos:** colores, tipografía, retícula, espaciados, logotipo e iconos.
- **Componentes:** elementos reutilizables, como botones, campos de formulario y tarjetas.
- **Módulos:** conjuntos de componentes que forman secciones de las páginas.

{{< project-figure src="/images/patronicity-blockquote.jpg" alt="Estilos de cita." caption="Estilos de cita." >}}

La web siguió usando AngularJS y PHP, así que desarrollé la biblioteca de estilos en Sass puro para aplicar la nueva identidad a la estructura existente. Al mantener los estilos separados del framework, esa base también se puede reutilizar si cambia la tecnología en el futuro.

Después implementé los componentes a partir de lo que había organizado en Figma. Así, las páginas pasaron a compartir los mismos estilos y elementos.

{{< project-figure src="/images/patronicity-project-card-mobile.jpg" desktop="/images/patronicity-project-card.jpg" alt="Tarjetas de proyectos." caption="Tarjetas de proyectos." >}}

## Construyendo las páginas

También diseñé bloques que se pudieran reutilizar en distintas páginas, como los de estadísticas, contacto y proyectos. Las nuevas páginas se podían crear combinando esos bloques.

Algunas páginas las diseñé junto con el diseñador. Otras las creé a partir de los componentes de la biblioteca, como las de inicio de sesión y registro, el proceso de pago y la [página de programas](https://www.patronicity.com/programs).

{{< project-figure src="/images/patronicity-sign-in-detail.jpg" desktop="/images/patronicity-sign-in.jpg" alt="Página de inicio de sesión." caption="Página de inicio de sesión." >}}

Los mismos módulos aparecen en otras páginas, como la de [socios](https://www.patronicity.com/partners). La idea era que esta organización siguiera siendo útil después de renovar la web, como base para crear nuevas páginas y mantener las existentes.
