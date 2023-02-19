import threeInRaw from 'assets/projects/slider/three-in-raw.png';
import twoInRaw from 'assets/projects/slider/two-in-raw.png';
import homePage from 'assets/projects/game-harbor/home-page.png';
import gamesPage from 'assets/projects/game-harbor/games-page.png';
import gamesPage2 from 'assets/projects/game-harbor/games-page2.png';
import gamePage from 'assets/projects/game-harbor/game-page.png';
import gamePage2 from 'assets/projects/game-harbor/game-page2.png';
import startPage from 'assets/projects/memory-game/start-page.png';
import loading from 'assets/projects/memory-game/loading.png';
import playGround from 'assets/projects/memory-game/playground.png';
import win from 'assets/projects/memory-game/win.png';
import mainPage from 'assets/projects/to-do/main-page.png';
import addColor from 'assets/projects/to-do/add-color.png';
import addEmoji from 'assets/projects/to-do/add-smiles.png';

const sliderPics = [
  { id: 1, src: threeInRaw },
  { id: 2, src: twoInRaw },
];

const gameHarborPics = [
  { id: 1, src: homePage },
  { id: 2, src: gamesPage },
  { id: 3, src: gamesPage2 },
  { id: 4, src: gamePage },
  { id: 5, src: gamePage2 },
];

const memoryGamePics = [
  { id: 1, src: startPage },
  { id: 1, src: loading },
  { id: 1, src: playGround },
  { id: 1, src: win },
];

const toDoPics = [
  { id: 1, src: mainPage },
  { id: 1, src: addColor },
  { id: 1, src: addEmoji },
];

const projects = [
  {
    name: 'Game Harbor',
    description: 'React game shop',
    pictures: gameHarborPics,
    summery:
      "A Full Stack clone of Instagram's features and a complete redesign of the UI. Originally built with firebase, it was rebuilt using React for the frontend, GraphQL for the backend, MongoDB for the database, and AWS S3 to store images.",
    technologies: 'React.js',
    live: '',
    code: '',
  },
  {
    name: 'Infinite Image Slider',
    description: 'React game shop',
    pictures: sliderPics,
    summery:
      "A Full Stack clone of Instagram's features and a complete redesign of the UI. Originally built with firebase, it was rebuilt using React for the frontend, GraphQL for the backend, MongoDB for the database, and AWS S3 to store images.",
    technologies: 'React.js',
    live: '',
    code: '',
  },
  {
    name: 'Gravity Falls',
    description: 'React game',
    pictures: memoryGamePics,
    summery:
      "A Full Stack clone of Instagram's features and a complete redesign of the UI. Originally built with firebase, it was rebuilt using React for the frontend, GraphQL for the backend, MongoDB for the database, and AWS S3 to store images.",
    technologies: 'React.js, GraphQL, MongoDB, AWS',
    live: '',
    code: '',
  },
  {
    name: 'To-Do',
    description: 'React game',
    pictures: toDoPics,
    summery:
      "A Full Stack clone of Instagram's features and a complete redesign of the UI. Originally built with firebase, it was rebuilt using React for the frontend, GraphQL for the backend, MongoDB for the database, and AWS S3 to store images.",
    technologies: 'React.js, GraphQL, MongoDB, AWS',
    live: '',
    code: '',
  },
];

export default projects;
