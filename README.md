
# Tah's Beauty Haven (TBH)

#### Tahs Beauty Haven (TBH) is a modern hairdresser’s client booking website designed to provide customers with a seamless and convenient experience. It allows users to browse through a wide range of hairstyles and services, view detailed descriptions and pricing, and easily book appointments online. 
#### The platform simplifies salon management, enhances customer engagement, and helps ensure that clients can schedule their preferred hairdo appointments anytime, anywhere.

## Features

- ✅ Appointment booking using **[Cal.com](https://cal.com/)**
- ✅ Gallery of previous work done
- ✅ Services page with images and prices of styles offered


<br>

<img width="1901" height="936" alt="image" src="https://github.com/user-attachments/assets/a474746b-b7e6-4093-90e4-c6bdaf12ab26" />


[![Maintained](https://img.shields.io/badge/Maintained%3F-Definitely-brightgreen.svg?style=flat-square)](https://github.com/onwidget)
>>>>>>> 9c645164c2c37ff8274ee2e45a9a9f31b562ff90

<br>

<details open>
<summary>Table of Contents</summary>

- [Demo](#demo)
- [Tech Stack](#tech-stack)
>>>>>>> 9c645164c2c37ff8274ee2e45a9a9f31b562ff90
- [Getting started](#getting-started)
  - [Project structure](#project-structure)
  - [Commands](#commands)
  - [Configuration](#configuration)
  - [Deploy](#deploy)
- [Acknowledgements](#acknowledgements)
>>>>>>> 9c645164c2c37ff8274ee2e45a9a9f31b562ff90

</details>

<br>

## Demo

📌 [https://tailnext.vercel.app/](https://tailnext.vercel.app/)

<br>

## Getting started

- Clone: `git clone https://github.com/nicholleK/Tahs-Beauty-Haven.git`
- Enter in the directory: `cd Tahs-Beauty-Haven`
- Install dependencies: `npm install`
- Start the development server: `npm run dev`
- View project in local environment: `localhost:3000`

### Project structure

Inside the **Tahs-Beauty-Haven** folder, you'll see the following folders and files:

```
/
├── .storybook/
├── app/
│   ├── (blog)
│   │   ├── [slug]
|   |   |   └── page.tsx
│   ├── (pages)
|   |       └── about/
|   |       └── booking/
|   |       └── contact/
|   |       └── faqs/
|   |       └── services/
|   |       └── gallery/
|   |       └── contact/
│   ├── api/
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── favicon.svg
│   └── videos/
├── src/
│   ├── assets/
│   │   ├── images/
|   |   └── styles/
|   |       └── base.css
│   ├── components/
│   │   ├── atoms/
|   |   └── widgets/
|   |       ├── Header.astro
|   |       ├── Footer.astro
|   |       └── ...
│   │── content/
│   |   └── blog/
│   |       ├── demo-post-1.md
│   |       └── ...
│   ├── stories/
│   ├── utils/
│   └── config.mjs
├── package.json
└── ...
```

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                       |
| :-------------------- | :------------------------------------------- |
| `npm install`         | Install dependencies                         |
| `npm run dev`         | Starts local dev server at `localhost:3000`  |
| `npm run build`       | Build your production site to `./dist/`      |
| `npm run preview`     | Preview your build locally, before deploying |
| `npm run storybook`   | Open storybook to view stories by widgets    |
| `npm run format`      | Format codes with Prettier                   |
| `npm run lint:eslint` | Run Eslint                                   |

<br>

### Configuration

Coming soon ..

<br>

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

#### Deploy to Netlify or Vercel

Clone this repository on own GitHub account and deploy to Netlify:

<br>

## Acknowledgements

Initially created by [onWidget](https://onwidget.com) and maintained by a community of [contributors](https://github.com/onwidget/tailnext/graphs/contributors).


