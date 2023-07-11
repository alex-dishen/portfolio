import { nanoid } from 'nanoid'
// To get the most out of a picture take a screenshot at 1500px width and 850px height
// Then put the picture into that converter: https://cloudconvert.com/png-to-webp and woala they are in webp and have way smaller size

const swipiLandingPics = [
  {
    id: nanoid(),
    src: '/projects/swipi-landing/intro.webp',
    alt: 'Swipi Landing Top',
  },
  {
    id: nanoid(),
    src: '/projects/swipi-landing/autoplay.webp',
    alt: 'Autoplay example',
  },
  {
    id: nanoid(),
    src: '/projects/swipi-landing/jsx_example.webp',
    alt: 'Example with JSX elements',
  },
  {
    id: nanoid(),
    src: '/projects/swipi-landing/playground.webp',
    alt: 'Playground section',
  },
  {
    id: nanoid(),
    src: '/projects/swipi-landing/installation.webp',
    alt: 'Installation section',
  },
]

const weaponryPics = [
  {
    id: nanoid(),
    src: '/projects/weaponry/home-screen.webp',
    alt: 'Home screen',
  },
  {
    id: nanoid(),
    src: '/projects/weaponry/camera-screen.webp',
    alt: 'Camera screen with Abrams',
  },
  {
    id: nanoid(),
    src: '/projects/weaponry/info-screen.webp',
    alt: 'Information screen with Abrams',
  },
  {
    id: nanoid(),
    src: '/projects/weaponry/camera-screen2.webp',
    alt: 'Camera screen with Challenger 2',
  },
  {
    id: nanoid(),
    src: '/projects/weaponry/info-screen2.webp',
    alt: 'Information screen with Challenger 2',
  },
]

const sliderPics = [
  {
    id: nanoid(),
    src: '/projects/slider/three-in-raw.webp',
    alt: 'Three pictures in row',
  },
  {
    id: nanoid(),
    src: '/projects/slider/two-in-raw.webp',
    alt: 'Two pictures in row',
  },
]

const gameHarborPics = [
  {
    id: nanoid(),
    src: '/projects/game-harbor/home-page.webp',
    alt: 'Home page',
  },
  {
    id: nanoid(),
    src: '/projects/game-harbor/games-page.webp',
    alt: 'Games page with filter "Popular in 2022"',
  },
  {
    id: nanoid(),
    src: '/projects/game-harbor/games-page2.webp',
    alt: 'Games page with filter "Next week"',
  },
  {
    id: nanoid(),
    src: '/projects/game-harbor/game-page.webp',
    alt: 'Lost Ark',
  },
  {
    id: nanoid(),
    src: '/projects/game-harbor/game-page2.webp',
    alt: 'Lost Ark with opened description',
  },
  {
    id: nanoid(),
    src: '/projects/game-harbor/game-page3.webp',
    alt: 'The Witcher 3: Wild Hunt ',
  },
]

export const projects = [
  {
    id: nanoid(),
    name: 'Swipi Landing',
    description: 'Landing page for Swipi project',
    pictures: swipiLandingPics,
    summary:
      "Swipi Landing Page is a showcase platform I designed and led the development of, highlighting the remarkable features and functionalities of Swipi, a customizable slider npm package.\n\nThe landing page serves as a comprehensive resource, providing visitors with a firsthand experience of Swipi's versatility. It showcases a collection of multiple examples, each demonstrating the power and flexibility of the Swipi slider. I want to mention that Swipi effortlessly adapts to various use cases, thanks to its robust feature set.\n\nOne of the standout features of Swipi Landing Page is its unique configuration customization. Visitors can easily adjust and fine-tune the slider's settings to suit their specific needs. As they modify the configurations, the landing page dynamically generates the corresponding code, enabling users to quickly copy and paste the generated code into their projects. This streamlined process empowers developers and designers to seamlessly integrate Swipi into their applications.\n\nExperience the magic of Swipi through the Swipi Landing Page, and embark on a journey of stunning and interactive web experiences.",
    technologies: 'React, TypeScript, Next.js, ChakraUI',
    live: 'https://swipi.midstem.net',
  },
  {
    id: nanoid(),
    name: 'Weaponry',
    description: 'Weapon recognition app',
    pictures: weaponryPics,
    summary:
      "Weaponry is a mobile application that uses image recognition technology to identify different types of weapons. The app is currently capable of recognizing six different tanks, with plans to expand to include other weapons in the near future.\n\nMy primary responsibilities on the project included designing and implementing the user interface for the app. I used my design skills to create a visually appealing and user-friendly interface for the app and then used React Native to code the UI. Additionally, I was responsible for managing the iOS side of the project, which involved testing the iOS version of the app, uploading the app to App Store Connect, and enabling TestFlight for testing purposes.\n\nWorking on Weaponry was a valuable learning experience for me as I was able to develop and practice my skills in both UI design, and its implementation, and the most interesting part is playing with a machine learning model, creating datasets, and training the model. Being part of such an innovative and exciting project has been an incredible experience, and I'm proud to have contributed to its development.",
    technologies: 'React Native, TypeScript, Styled-Components',
    appleLink: 'https://apps.apple.com/app/weaponry/id6446477481',
    googleButton: '',
  },
  {
    id: nanoid(),
    name: 'Swipi',
    description: 'Light-weight slider',
    pictures: sliderPics,
    summary:
      "Introducing a lightweight and customizable slider built with React and TypeScript that offers an infinitely scrolling experience.\n\nThis slider has been designed with user experience in mind and offers a range of features that make it stand out from other sliders available in the market. One of the key benefits of this slider is its weight - it has been developed to be lightweight, ensuring that it loads quickly and doesn't slow down your website.\n\nThe slider allows users to easily customize the position of the dots and arrows, add animation to the slides and dots. In addition to this, it offers autoplay functionality, as well as a range of other props that can be used to customize the slider's behavior.\n\nWhether you're building a personal website, an online store, or a blog, this slider can be easily integrated to help enhance the user experience and make your website more engaging. So, if you're looking for a high-quality, customizable slider that offers a range of features and is easy to use, this is the perfect solution for you.",
    technologies: 'React, TypeScript',
    live: 'https://midstem.github.io/swipi-landing/',
    code: 'https://github.com/midstem/swipi-landing',
  },
  {
    id: nanoid(),
    name: 'Game Harbor',
    description: 'Game shop with main database from RAWG API',
    pictures: gameHarborPics,
    summary:
      "Game Harbor is an online game shop that allows users to browse a wide variety of games from different genres and operating systems. It harnesses the power of the RAWG API to ensure that all games are up-to-date and accurate. Users can easily filter games by operating system, game genre and others.\n\nThe website is designed to be user-friendly, allowing users to easily browse and view all games for the specific filter or details of individual game. Users can add games to their cart for 'purchase', and can also create wishlists to keep track of their favorite games.\n\nGame Harbor also allows registered users to contribute to the website by adding new games if they believe that any are missing. Additionally, the website has a powerful search feature that allows users to quickly find specific games they are looking for.\n\nGame Harbor is an exceptional gaming platform that provides a rich and immersive user experience. It is a must-have addition to any gamer's arsenal.",
    technologies:
      'React, TypeScript, Redux Toolkit, Styled-Components, RAWG API, Node.js Express, PostgreSQL',
    live: 'https://alex-dishen.github.io/game-harbor/',
    code: 'https://github.com/alex-dishen/game-harbor',
  },
]
