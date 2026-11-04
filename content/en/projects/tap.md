---
title: "TAP Air Portugal"
subtitle: "Design system documentation and development"
summary: "Building and documenting TAP’s design system."
year: "2024"
location: "🇵🇹 Portugal"
image: /images/covers/tap-c568d9b7b9.jpg
thumbBg: "#f5fff0"
website: https://www.flytap.com
stack: ["Angular", "React", "TypeScript", "Storybook", "HTML"]
weight: 1
---

When I started working at [TAP](https://www.flytap.com), one thing that caught my attention was that there were already components in Figma, but no documentation to guide their implementation in code.

Components were built again for each new application, leading to differences in appearance and behavior. A fix made in one project didn’t always reach the others. Over time, the applications also drifted away from what was defined in Figma.

> *If it isn’t documented, it doesn’t exist.*

I heard this phrase from my first programming mentor, who was a fan of [Miriam Suzanne at OddBird](https://www.oddbird.net/authors/miriam/). He said it so often that it became my mantra too. Without documentation, whoever comes next has to guess how things work. Everything is easier with an instruction manual.

My proposal was to create a design system that brought together design guidelines and components in code. Teams could then reuse what was already there without starting from scratch on every project.

## Development

I started by organizing the project’s foundations: colors, typography, spacing, grids and brand guidelines. From those definitions, I structured the tokens used in the styles and components.

With that foundation in place, I moved on to documenting the components and modules, including their variations and states. For each one, the documentation needed to explain when to use it, how to implement it, and which accessibility requirements and content guidelines to follow.

I organized the project into six parts:

- **Sass library:** holds the shared styles.
- **Assets repository:** brings together images and common scripts.
- **Main documentation:** brings together brand guidelines, foundations and accessibility requirements, with links to each library’s documentation.
- **Angular library:** provides components for Angular applications.
- **Web Components library:** provides components that don’t depend on a particular framework.
- **React library:** provides components for React applications.

All three component libraries use the same styling foundation. The implementation changes with the technology, but the appearance and behavior should stay the same.

## Documentation and working components

I chose Hugo for the documentation portal. It let me organize the guidelines in a static site, with Markdown content and version control, without relying on a paid documentation platform. I used SassDoc for the styles’ technical reference.

Each component library has its own Storybook documentation, where teams can explore variations and test components in isolation.

My goal was to bring the design definitions closer to what was delivered in code, creating a structure that teams could use, maintain and keep developing.

Unfortunately, I can’t share our internal documentation because it’s confidential. The images are from the [TAP website](https://www.flytap.com/pt-pt).

{{< responsive-figure src="/images/tap-public-home-mobile.png" desktop="/images/tap-public-home-desktop.png" alt="Header and featured banner on the TAP home page" caption="TAP home page." >}}

{{< responsive-figure src="/images/tap-public-booking-mobile.png" desktop="/images/tap-public-booking-desktop.png" alt="Booking form on the TAP website" caption="TAP booking form." >}}
