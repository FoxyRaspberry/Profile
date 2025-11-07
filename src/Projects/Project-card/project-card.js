import formGeneratorImage from '../../assets/form-generator.svg';
import ticTacToeImage from '../../assets/tic-tac-toe.svg';
import shelterImage from '../../assets/shelter.svg';
import englishForKidsImage from '../../assets/english-for-kids.svg';

export const projectsCard = [
  {
    id: 1,
    image: formGeneratorImage,
    title: 'Form generator',
    subtitle: 'Implemented in Angular (v. 18), it allows you to customize and create a form constructed from standard elements (text fields, drop-down lists, etc.).',
    link: 'https://foxyraspberry.github.io/form-generator/browser/',
  },
  {
    id: 2,
    image: ticTacToeImage,
    title: 'Tic-Tac-Toe game',
    subtitle: 'A tic-tac-toe game implemented in React',
    link: 'https://foxyraspberry.github.io/Let-s-play-tic-tac-toe/',
  },

  {
    id: 3,
    image: shelterImage,
    title: 'Shelter',
    subtitle: 'A website with responsive layout and JavaScript support.',
    link: 'https://foxyraspberry.github.io/Shelter/pages/main/',
  },
  {
    id: 4,
    image: englishForKidsImage,
    title: 'English for kids',
    subtitle: 'A web application for learning English words in a game-like format.',
    link: 'https://foxyraspberry.github.io/english-for-kids/',
  },
];
