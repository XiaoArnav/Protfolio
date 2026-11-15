# Arnav Patel - Portfolio

Personal portfolio website built with HTML5, CSS3, and JavaScript for Web Development Lab.

- **Live Site:** [https://xiaoarnav.github.io/Protfolio/](https://xiaoarnav.github.io/Protfolio/)
- **Author:** Arnav Patel ([@XiaoArnav](https://github.com/XiaoArnav))

## Overview
This repository contains my personal developer portfolio website. It features a responsive multi-column layout, interactive project showcase, client-side search, and dedicated pages for browsing projects by category, tag, and date.

## Features
- **Responsive Layout:** Works smoothly on mobile, tablet, and desktop screens.
- **Sidebar Navigation:** Quick navigation with active page indicator and social links.
- **Project Showcase:** Highlights recent work and contributions with preview cards.
- **Live Search:** Instant client-side search filtering by project title, description, and keywords.
- **Organized Sections:** Dedicated sub-pages for Categories, Tags, Archives (timeline), and About Me.
- **Light Theme:** Clean, minimal light aesthetic with smooth hover effects.

## Project Structure
```text
Protfolio/
├── assets/
│   ├── css/
│   │   └── style.css          # Main stylesheet and custom variables
│   ├── img/
│   │   └── avatar.png         # Profile photo
│   └── js/
│       ├── app.js             # Search filtering and scroll-to-top script
│       └── mobile-nav.js      # Mobile drawer navigation script
├── about/
│   └── index.html             # About me page
├── categories/
│   └── index.html             # Projects organized by category
├── tags/
│   └── index.html             # Projects organized by tags
├── archives/
│   └── index.html             # Chronological project timeline
├── index.html                 # Home page
└── README.md                  # Project documentation
```

## Technologies Used
- **HTML5:** Semantic document markup
- **CSS3:** Flexbox, CSS Grid, media queries, CSS variables
- **JavaScript (Vanilla):** DOM manipulation, live search filtering, mobile drawer navigation
- **FontAwesome:** Interface icons
- **Google Fonts:** Lato and Source Sans Pro

## Running Locally
Clone the repository and open `index.html` in any web browser:
```bash
git clone https://github.com/XiaoArnav/Protfolio.git
cd Protfolio
open index.html
```
