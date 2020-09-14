import governor from '../../images/governorMock.jpg'
import heros from '../../images/herosMock.jpg'
import kenaz from '../../images/kenazMock.jpg'
import portfolio from '../../images/portfolioMock.jpg'
import filmoteka from '../../images/filmotekaMock.jpg'

const initialState = {
  aboutMe: [
    {
      id: 1,
      quote: 'Master\'s and bachelor\'s degree in electrical engineering.',
      classes: 'infoBlock block--1'
    },
    {
      id: 2,
      quote: 'Edunova web course, multiple Udemy courses including: JS, CSS, Vue, Angular and React. Factory web academy.',
      classes: 'infoBlock block--2'
    },
    {
      id: 3,
      quote: 'Good food lover, vine lover, F1 fanatic, Mensa member and much more :)}',
      classes: 'infoBlock block--3'
    }
  ],
  projects: [
    {
      id: 1,
      name: 'WHO\'S YOUR GOVERNOR?',
      image: governor,
      features: [
        'Angular 6+',
        'Angular Material',
        'Internationalisation (ngx)',
        'Use of pipes',
        'For Laptop and smartphone'
      ],
      code: 'https://github.com/lpatrun/whosYourGovernor',
      live: 'https://lpatrun.github.io/whosYourGovernor',
      classes: 'project-bullets angular-background'
    },
    {
      id: 2,
      name: 'Portoflio project',
      image: portfolio,
      features: [
        'React',
        'Redux',
        '*work in progress'
      ],
      code: 'https://github.com/lpatrun/portfolio',
      live: 'https://lpatrun.github.io/portfolio',
      classes: 'project-bullets react-background'
    },
    {
      id: 3,
      name: 'Kenaz - news portal',
      image: kenaz,
      features: [
        'Vue',
        'Vuex',
        'Vue router',
        'Vue resource',
        'Internationalisation',
        'SASS',
        '*works only locally'
      ],
      code: 'https://github.com/lpatrun/kenaz',
      live: 'https://lpatrun.github.io/kenaz',
      classes: 'project-bullets vue-background'
    },
    {
      id: 4,
      name: 'Heros fight',
      image: heros,
      features: [
        'Angular 10',
        'Child routes',
        'API consumption',
        'Services',
        'Use of pipes',
        '*mobile - TBD'
      ],
      code: 'https://github.com/lpatrun/fightClub',
      live: 'https://lpatrun.github.io/fightClub',
      classes: 'project-bullets angular-background'
    },
    {
      id: 5,
      name: 'Movie library',
      image: filmoteka,
      features: [
        'Vue.js',
        'REST API consumption',
        'TMDb API',
        'Vuex',
        'Vue resource',
        'Responsive'
      ],
      code: 'https://github.com/lpatrun/moviesVueJs',
      live: 'https://lpatrun.github.io/moviesVueJs',
      classes: 'project-bullets vue-background'
    }
  ]
}

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;