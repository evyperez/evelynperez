---
translationKey: "why-hugo"
title: "Por qué uso Hugo"
date: 2026-07-17
draft: false
tags: ["hugo", "sitios estáticos", "frontend"]
categories: ["tips"]
description: "Velocidad, previsibilidad y libertad de organización. Por qué Hugo sigue siendo mi opción para portfolios, blogs y sitios centrados en contenido."
author: "Evelyn Perez"
image: "/images/blog/hugo-website.webp"
imageAlt: "Presentación de Hugo en su web oficial"
imageWidth: 936
imageHeight: 375
thumbnail: "/images/blog/hugo-thumbnail.webp"
thumbnailWidth: 640
thumbnailHeight: 480
---

Conocí el framework Hugo hace casi 10 años, por recomendación de un compañero de trabajo, Sobral. Desde entonces he probado varios frameworks y otras tecnologías, pero sigue siendo mi elección para proyectos personales, sitios corporativos y otros proyectos más sencillos.

## ¿Qué tiene de especial?

Hugo genera páginas **estáticas**. Para explicar por qué eso importa, conviene compararlas con las páginas **dinámicas**.

Una página dinámica puede generar contenido durante una visita, según los datos o la persona que esté usando el sitio. Es habitual en tiendas online, redes sociales y sistemas donde cada persona ve información diferente.

Con Hugo, las páginas se generan antes de la publicación. Cuando alguien visita el sitio, los archivos ya están preparados para entregarse al navegador.

Esa **previsibilidad** es una de las cosas que valoro: puedo generar y comprobar el resultado antes de publicar. Al final tengo archivos **HTML, CSS y JavaScript** que puedo alojar en distintos servicios.

La rapidez también ayuda durante el desarrollo. Mientras edito contenido o plantillas, el servidor local actualiza la vista previa casi al instante.

## A la hora de desarrollar

También me gusta trabajar con **YAML** y **Markdown**. Uso YAML para la configuración y Markdown para escribir el contenido, lo que hace que las actualizaciones sean más prácticas que editar HTML.

Puedo organizar carpetas, layouts y plantillas según el proyecto. También puedo definir menús y parámetros en el archivo de configuración sin tener que seguir siempre la misma organización.

## ¿Y el SEO?

Cada página tiene un **front matter**, un bloque de configuración al inicio del archivo Markdown. Ahí defino el **título**, la **descripción**, la **imagen**, las **etiquetas** y otros datos utilizados por los motores de búsqueda y las redes sociales. Así, esta información se mantiene junto al contenido y bajo control de versiones.

## ¿Y el coste?

Para servir estas páginas no necesito mantener una aplicación ejecutándose en el servidor ni una base de datos. Puedo publicar los archivos en servicios como:

- [Netlify](https://www.netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

Esto ayuda a mantener bajo el coste de alojamiento y reduce el trabajo de infraestructura. El mantenimiento se centra más en el código y el contenido.

## ¿Y si el cliente quiere editar el contenido?

Hugo trabaja con archivos Markdown, pero no todos los clientes quieren o saben usar Git para actualizar una web.

He utilizado **[Decap CMS](https://decapcms.org/)**, antes Netlify CMS, en proyectos para clientes. Permite editar el contenido mediante una interfaz visual mientras Hugo sigue generando páginas estáticas.

Yo me encargo de la estructura y la parte técnica, y quien crea el contenido puede actualizar textos e imágenes sin tocar el código. El historial de cambios también ayuda cuando necesitamos recuperar una versión anterior.

## ¿Entonces Hugo sirve para cualquier proyecto?

Cuando necesito desarrollar una aplicación con **autenticación**, **datos en tiempo real** o mucha lógica en el servidor, probablemente elegiré otra tecnología.

Para sitios corporativos, portfolios y otros proyectos donde el contenido es lo principal, Hugo sigue funcionando bien para mí.

<small>Este portfolio fue desarrollado con Hugo. Todo el código está disponible en <a href="https://github.com/evyperez" target="_blank" rel="noopener">github.com/evyperez</a>.</small>
