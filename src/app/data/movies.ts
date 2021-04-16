import { isLoweredSymbol } from '@angular/compiler';

export const movies = [
  {
    id: 1,
    title: 'Pacific Rim',
    year: 2021,
    price: 50000,
    description:
      'Lorem ipsum doler si amet incognito adakadabra, alhambra dota terpana nan luar biasa oh sip. Suspendisse cursus sagittis ex dignissim viverra. Fusce in quam sodales, vestibulum felis nec, faucibus diam.',
    genre: 'action, war',
    purchased: true,
  },
  {
    id: 2,
    title: 'Godzilla vs Kingkong',
    year: 2021,
    price: 150000,
    description:
      'Lorem ipsum doler si amet incognito adakadabra, alhambra dota terpana nan luar biasa oh sip. Suspendisse cursus sagittis ex dignissim viverra. Fusce in quam sodales, vestibulum felis nec, faucibus diam.',
    genre: 'action, war, travelling',
    purchased: false,
  },
  {
    id: 3,
    title: 'Raya the Last Dragon',
    year: 2021,
    price: 230000,
    description:
      'Lorem ipsum doler si amet incognito adakadabra, alhambra dota terpana nan luar biasa oh sip. Suspendisse cursus sagittis ex dignissim viverra. Fusce in quam sodales, vestibulum felis nec, faucibus diam.',
    genre: 'comedy, adventure, animation',
    purchased: true,
  },
  {
    id: 4,
    title: 'Pirates of Caribbean',
    year: 2021,
    price: 70000,
    description:
      'Lorem ipsum doler si amet incognito adakadabra, alhambra dota terpana nan luar biasa oh sip. Suspendisse cursus sagittis ex dignissim viverra. Fusce in quam sodales, vestibulum felis nec, faucibus diam.',
    genre: 'adventure, comedy',
    purchased: false,
  },
  {
    id: 5,
    title: 'The Hunger Games',
    year: 2012,
    price: 60000,
    description:
      'Lorem ipsum doler si amet incognito adakadabra, alhambra dota terpana nan luar biasa oh sip. Suspendisse cursus sagittis ex dignissim viverra. Fusce in quam sodales, vestibulum felis nec, faucibus diam.',
    genre: 'Adventure, Action',
    purchased: true,
  },
  {
    id: 6,
    title: 'Divergence',
    year: 2017,
    price: 65000,
    description:
      'Lorem ipsum doler si amet incognito adakadabra, alhambra dota terpana nan luar biasa oh sip. Suspendisse cursus sagittis ex dignissim viverra. Fusce in quam sodales, vestibulum felis nec, faucibus diam.',
    genre: 'Adventure, Action',
    purchased: false,
  },
  {
    id: 7,
    title: 'Guardians of Galaxy',
    year: 2018,
    price: 150000,
    description:
      'Lorem ipsum doler si amet incognito adakadabra, alhambra dota terpana nan luar biasa oh sip. Suspendisse cursus sagittis ex dignissim viverra. Fusce in quam sodales, vestibulum felis nec, faucibus diam.',
    genre: 'Action, Adventure, Comedy, Sci-Fi',
    purchased: false,
  },
  {
    id: 8,
    title: 'I Robot',
    year: 2017,
    price: 65000,
    description:
      'Lorem ipsum doler si amet incognito adakadabra, alhambra dota terpana nan luar biasa oh sip. Suspendisse cursus sagittis ex dignissim viverra. Fusce in quam sodales, vestibulum felis nec, faucibus diam.',
    genre: 'Sci-Fi, Action, Thriller',
    purchased: false,
  },
  {
    id: 9,
    title: 'The Crooks',
    year: 2018,
    price: 67000,
    description:
      'Lorem ipsum doler si amet incognito adakadabra, alhambra dota terpana nan luar biasa oh sip. Suspendisse cursus sagittis ex dignissim viverra. Fusce in quam sodales, vestibulum felis nec, faucibus diam.',
    genre: 'Comedy, Adventure, Family',
    purchased: false,
  },
  {
    id: 10,
    title: 'Anabelle',
    year: 2015,
    price: 20000,
    description:
      'Lorem ipsum doler si amet incognito adakadabra, alhambra dota terpana nan luar biasa oh sip. Suspendisse cursus sagittis ex dignissim viverra. Fusce in quam sodales, vestibulum felis nec, faucibus diam.',
    genre: 'Horror, Thriller',
  },
  {
    id: 11,
    title: 'The Indidious',
    year: 2013,
    price: 45000,
    description:
      'Lorem ipsum doler si amet incognito adakadabra, alhambra dota terpana nan luar biasa oh sip. Suspendisse cursus sagittis ex dignissim viverra. Fusce in quam sodales, vestibulum felis nec, faucibus diam.',
    genre: 'Horror, Thriller',
    purchased: false,
  },
  {
    id: 12,
    title: 'The Passenger',
    year: 2019,
    price: 49000,
    description:
      'Lorem ipsum doler si amet incognito adakadabra, alhambra dota terpana nan luar biasa oh sip. Suspendisse cursus sagittis ex dignissim viverra. Fusce in quam sodales, vestibulum felis nec, faucibus diam.',
    genre: 'Adventure, Sci-Fi',
    purchased: false,
  },
];
