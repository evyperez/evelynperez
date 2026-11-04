---
title: "Patronicity"
subtitle: "Rebranding & Design System"
summary: "Organizing Patronicity’s new visual identity into components and pages."
year: "2023–2024"
location: "🇺🇸 USA"
image: /images/covers/patronicity-e178c3f4f8.jpg
thumbBg: "#fffaf4"
website: https://www.patronicity.com
stack: ["AngularJS", "PHP", "Figma", "Sass"]
weight: 2
---

[Patronicity](https://www.patronicity.com/) is a crowdfunding platform for community projects in the United States.

In 2023, Patronicity decided to redesign its website, which was more than ten years old. I received the layouts for the new visual identity, but they still needed to be organized for development.

My job was to turn those layouts into a shared foundation for design and code, and to create the pages that hadn’t been designed yet.

{{< project-figure src="/images/patronicity-home-detail-mobile.jpg" desktop="/images/patronicity-home-detail.jpg" alt="Patronicity home page." caption="Patronicity home page." >}}

## Development

I started by defining the foundations in Figma, including colors, typography, spacing and the grid. I then redrew the pages using those standards and documented the foundations, components and modules before starting on the code.

I organized the library into three parts:

- **Foundations:** colors, typography, grid, spacing, logo and icons.
- **Components:** reusable elements such as buttons, form fields and cards.
- **Modules:** groups of components that form sections of a page.

{{< project-figure src="/images/patronicity-blockquote.jpg" alt="Blockquote styles." caption="Blockquote styles." >}}

The site kept its existing AngularJS and PHP code, so I built the style library in plain Sass to apply the new identity to the existing structure. Keeping the styles separate from the framework also means they can be reused if the technology changes later.

I then implemented the components based on what I had organized in Figma. Pages could then share the same styles and elements.

{{< project-figure src="/images/patronicity-project-card-mobile.jpg" desktop="/images/patronicity-project-card.jpg" alt="Project cards." caption="Project cards." >}}

## Building the pages

I also designed blocks that could be reused across different pages, such as statistics, contact and project blocks. New pages could be put together by combining these blocks.

Some pages were designed together with the designer. Others I created using the library’s components, including the sign-in and sign-up pages, the checkout flow and the [programs page](https://www.patronicity.com/programs).

{{< project-figure src="/images/patronicity-sign-in-detail.jpg" desktop="/images/patronicity-sign-in.jpg" alt="Sign-in page." caption="Sign-in page." >}}

The same modules also appear on other pages, such as the [partners page](https://www.patronicity.com/partners). The idea was for this structure to remain useful after the redesign, providing a foundation for new pages and for maintaining the existing ones.
