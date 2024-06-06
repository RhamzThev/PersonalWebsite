# Personal Website

This repository contains the source code for my personal website built using Next.js. The website showcases my professional experience, skills, projects, and provides contact information.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [File Structure](#file-structure)
- [License](#license)

## Introduction

Welcome to my personal website repository. This site is designed to provide a detailed overview of my professional background, including my skills, experience, and projects. The website is built with a focus on performance and responsiveness, ensuring a seamless user experience across different devices.

## Features

- **About Section:** An introduction to who I am and my professional background.
- **Experience Section:** A detailed list of my work experiences and projects.
- **Contact Section:** Links to my GitHub, LinkedIn, and email for easy communication.
- **Resume:** An embedded PDF of my resume for download and review.

## Technologies Used

- **Next.js:** A React framework for building fast, user-friendly web applications.
- **React:** A JavaScript library for building user interfaces.
- **Sass:** A CSS preprocessor for easier and more efficient styling.
- **Typewriter Effect:** A library for creating a typewriter effect in the About section.
- **FontAwesome:** A library for using icons in the Contact section.

## Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RhamzThev/PersonalWebsite.git
   cd PersonalWebsite
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to see the application in action.

## Usage

The website consists of several components that display various sections of my professional background. Here are the main components:

- **Landing:** The landing page with a brief introduction.
- **About:** Details about my professional journey and skills.
- **Experience:** A list of my projects and work experiences.
- **Contact:** Links to my professional profiles and contact information.
- **Resume:** An embedded PDF viewer for my resume.

## File Structure

```
PersonalWebsite/
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Experience.jsx
│   ├── Landing.jsx
│   └── Panel.jsx
├── pages/
│   ├── _app.jsx
│   ├── _document.jsx
│   ├── index.jsx
│   └── resume/
│       └── index.jsx
├── public/
│   ├── images/
│   │   ├── about.png
│   │   ├── landing.png
│   │   └── projects/
│   ├── favicon.ico
│   ├── resume.pdf
│   └── ...
├── styles/
│   ├── globals.css
│   ├── About.module.scss
│   ├── Contact.module.scss
│   ├── Experience.module.scss
│   ├── Landing.module.scss
│   ├── resume.module.scss
│   └── ...
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
├── yarn.lock
└── ...
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
