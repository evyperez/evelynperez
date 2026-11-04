---
translationKey: "why-hugo"
title: "Why I use Hugo"
date: 2026-07-17
draft: false
tags: ["hugo", "static sites", "frontend"]
categories: ["tips"]
description: "Speed, predictability, and freedom of organisation. Why Hugo remains my go-to for portfolios, blogs, and content-focused sites."
author: "Evelyn Perez"
image: "/images/blog/hugo-website.webp"
imageAlt: "Hugo introduction on its official website"
imageWidth: 936
imageHeight: 375
thumbnail: "/images/blog/hugo-thumbnail.webp"
thumbnailWidth: 640
thumbnailHeight: 480
---

I discovered the Hugo framework almost 10 years ago, on the recommendation of a colleague, Sobral. Since then I have tried several frameworks and other technologies, but it remains my choice for personal projects, company websites and other simpler projects.

## What makes it useful?

Hugo generates **static** pages. To explain why that matters, it helps to compare them with **dynamic** pages.

A dynamic page can assemble content during a visit, depending on the data or who is using the site. This is common in online stores, social networks and systems where each person sees different information.

With Hugo, pages are generated before publication. When someone visits the site, the files are already ready for the browser to receive.

That **predictability** is something I appreciate: I can generate and check the result before publishing. I end up with **HTML, CSS and JavaScript** files that I can host on different services.

The speed also helps during development. While I edit content or templates, the local server updates the preview almost instantly.

## Working with Hugo

I also like working with **YAML** and **Markdown**. I use YAML for configuration and Markdown to write content, which makes updates more practical than editing HTML.

I can organise folders, layouts and templates to suit the project. I can also define menus and parameters in the configuration file without using the same organisation for every project.

## What about SEO?

Each page has **front matter**, a configuration block at the start of the Markdown file. That is where I define the **title**, **description**, **image**, **tags** and other information used by search engines and social media. These details stay with the content and under version control.

## What about cost?

Serving these pages does not require me to maintain a server-side application or a database. I can publish the files on services such as:

- [Netlify](https://www.netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

This helps keep hosting costs low and reduces infrastructure work. Maintenance is more focused on the code and content.

## What if the client wants to edit the content?

Hugo uses Markdown files, but not every client wants to, or knows how to, use Git to update a website.

I have used **[Decap CMS](https://decapcms.org/)**, formerly Netlify CMS, on client projects. It provides a visual interface for editing content while Hugo continues to generate static pages.

I handle the structure and technical side, while the person creating content can update text and images without editing code. The change history also helps when we need to recover an earlier version.

## Does Hugo work for every project?

When I need to build an application with **authentication**, **real-time data** or substantial server-side logic, I will probably choose another technology.

For company websites, portfolios and other projects where content is the main focus, Hugo continues to work well for me.

<small>This portfolio was built with Hugo. The full code is available at <a href="https://github.com/evyperez" target="_blank" rel="noopener">github.com/evyperez</a>.</small>
