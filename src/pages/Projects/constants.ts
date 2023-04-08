import uniqid from 'uniqid';
// Screen width needed to take a picture 1500
import threeInRaw from 'assets/images/projects/slider/three-in-raw.webp';
import twoInRaw from 'assets/images/projects/slider/two-in-raw.webp';
import homePage from 'assets/images/projects/game-harbor/home-page.webp';
import gamesPage from 'assets/images/projects/game-harbor/games-page.webp';
import gamesPage2 from 'assets/images/projects/game-harbor/games-page2.webp';
import gamePage from 'assets/images/projects/game-harbor/game-page.webp';
import gamePage2 from 'assets/images/projects/game-harbor/game-page2.webp';
import gamePage3 from 'assets/images/projects/game-harbor/game-page3.webp';

const gameHarborPics = [
  { id: uniqid(), src: homePage, alt: 'Home page' },
  {
    id: uniqid(),
    src: gamesPage,
    alt: 'Games page with filter "Popular in 2022"',
  },
  { id: uniqid(), src: gamesPage2, alt: 'Games page with filter "Next week"' },
  { id: uniqid(), src: gamePage, alt: 'Lost Ark' },
  { id: uniqid(), src: gamePage2, alt: 'Lost Ark with opened description' },
  { id: uniqid(), src: gamePage3, alt: 'The Witcher 3: Wild Hunt ' },
];

const sliderPics = [
  { id: uniqid(), src: threeInRaw, alt: 'Three pictures in row' },
  { id: uniqid(), src: twoInRaw, alt: 'Two pictures in row' },
];

export const projects = [
  {
    id: uniqid(),
    name: 'Game Harbor',
    description: 'Game shop with database from RAWG API',
    pictures: gameHarborPics,
    summary:
      "Game Harbor is an online game shop that allows users to browse a wide variety of games from different genres and operating systems. It harnesses the power of the RAWG API to ensure that all games are up-to-date and accurate. Users can easily filter games by operating system, game genre and others.\n\nThe website is designed to be user-friendly, allowing users to easily browse and view all games for the specific filter or details of individual game. Users can add games to their cart for 'purchase', and can also create wishlists to keep track of their favorite games.\n\nGame Harbor also allows registered users to contribute to the website by adding new games if they believe that any are missing. Additionally, the website has a powerful search feature that allows users to quickly find specific games they are looking for.\n\nGame Harbor is an exceptional gaming platform that provides a rich and immersive user experience. It is a must-have addition to any gamer's arsenal.",
    technologies:
      'React, TypeScript, Redux Toolkit, Styled-Components, RAWG API',
    live: 'https://alex-dishen.github.io/shop/',
    code: 'https://github.com/alex-dishen/shop',
  },
  {
    id: uniqid(),
    name: 'Swipi',
    description: 'Light-weight slider',
    pictures: sliderPics,
    summary:
      "Introducing a lightweight and customizable slider built with React and TypeScript that offers an infinitely scrolling experience.\n\nThis slider has been designed with user experience in mind and offers a range of features that make it stand out from other sliders available in the market. One of the key benefits of this slider is its weight - it has been developed to be lightweight, ensuring that it loads quickly and doesn't slow down your website.\n\nThe slider allows users to easily customize the position of the dots and arrows, add animation to the slides and dots. In addition to this, it offers autoplay functionality, as well as a range of other props that can be used to customize the slider's behavior.\n\nWhether you're building a personal website, an online store, or a blog, this slider can be easily integrated to help enhance the user experience and make your website more engaging. So, if you're looking for a high-quality, customizable slider that offers a range of features and is easy to use, this is the perfect solution for you.",
    technologies: 'React, TypeScript',
    live: 'https://codesandbox.io/s/all-custom-demo-vfxhtr',
    code: 'https://github.com/MaKs-Tkachyk/swipi',
  },
];
