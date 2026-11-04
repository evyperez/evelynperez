---
title: "TAP Air Portugal"
subtitle: "Documentación y desarrollo de un sistema de diseño"
summary: "Desarrollo y documentación del sistema de diseño de TAP."
year: "2024"
location: "🇵🇹 Portugal"
image: /images/covers/tap-c568d9b7b9.jpg
thumbBg: "#f5fff0"
website: https://www.flytap.com
stack: ["Angular", "React", "TypeScript", "Storybook", "HTML"]
weight: 1
---

Cuando empecé a trabajar en [TAP](https://www.flytap.com), una de las cosas que me llamó la atención fue que ya existían componentes en Figma, pero faltaba documentación que orientara su implementación en código.

En cada aplicación nueva se volvían a desarrollar los componentes, lo que generaba diferencias de aspecto y comportamiento. Una corrección hecha en un proyecto no siempre llegaba a los demás. Poco a poco, las aplicaciones también se alejaban de lo definido en Figma.

> *Si no está documentado, no existe.*

Escuché esta frase de mi primer mentor de programación, que era admirador de [Miriam Suzanne, de OddBird](https://www.oddbird.net/authors/miriam/). La repetía tanto que también se convirtió en mi mantra. Sin documentación, quien viene después tiene que adivinar cómo funcionan las cosas. Todo es más fácil con un manual de instrucciones.

Mi propuesta fue crear un sistema de diseño que reuniera las pautas de diseño y los componentes en código. Así, los equipos podrían reutilizar lo que ya estaba hecho sin empezar de cero en cada proyecto.

## Desarrollo

Empecé organizando los fundamentos del proyecto: colores, tipografía, espaciado, retícula y directrices de marca. A partir de esas definiciones, estructuré los tokens utilizados en los estilos y componentes.

Con esa base definida, pasé a documentar los componentes y módulos, incluidas sus variantes y estados. Para cada uno había que explicar cuándo usarlo, cómo implementarlo y qué requisitos de accesibilidad y pautas de contenido seguir.

Organicé el proyecto en seis partes:

- **Biblioteca Sass:** concentra los estilos compartidos.
- **Repositorio de assets:** reúne imágenes y scripts de uso común.
- **Documentación principal:** reúne las directrices de marca, los fundamentos y los requisitos de accesibilidad, además de los enlaces a la documentación de cada biblioteca.
- **Biblioteca Angular:** ofrece componentes para aplicaciones en Angular.
- **Biblioteca de Web Components:** ofrece componentes que no dependen de un framework concreto.
- **Biblioteca React:** ofrece componentes para aplicaciones en React.

Las tres bibliotecas de componentes usan la misma base de estilos. La implementación cambia según la tecnología, pero el aspecto y los comportamientos deben ser los mismos.

## Documentación y componentes en funcionamiento

Elegí Hugo para el portal de documentación. Me permitió organizar las directrices en un sitio estático, con contenido en Markdown y control de versiones, sin depender de una plataforma de pago. Para la referencia técnica de los estilos utilicé SassDoc.

Cada biblioteca de componentes tiene su propia documentación en Storybook, donde es posible explorar las variantes y probar los componentes de forma aislada.

Mi objetivo fue acercar lo definido en el diseño a lo entregado en código, creando una estructura que los equipos pudieran usar, mantener y seguir desarrollando.

Por desgracia, no puedo mostrar nuestra documentación interna porque es confidencial. Las imágenes son de la [web de TAP](https://www.flytap.com/pt-pt).

{{< responsive-figure src="/images/tap-public-home-mobile.png" desktop="/images/tap-public-home-desktop.png" alt="Cabecera y banner de la página de inicio de la web de TAP" caption="Página de inicio de TAP." >}}

{{< responsive-figure src="/images/tap-public-booking-mobile.png" desktop="/images/tap-public-booking-desktop.png" alt="Formulario de reserva de la web de TAP" caption="Formulario de reserva de TAP." >}}
