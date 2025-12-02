import { InterestItem } from '../types';

// Helper to generate dummy books for pagination demo
const generateBooks = (): InterestItem[] => {
  const baseBooks: InterestItem[] = [
    {
      id: 'b1',
      category: 'Reading',
      title: 'Steve Jobs',
      subtitle: 'Walter Isaacson',
      status: 'Read',
      type: 'Biography',
      note: '',
    },
    {
      id: 'b2',
      category: 'Reading',
      title: 'Einstein: His Life and Universe',
      subtitle: 'Walter Isaacson',
      status: 'Read',
      type: 'Biography',
      note: 'Exploration',
    },
    {
      id: 'b3',
      category: 'Reading',
      title: 'Tim Cook',
      subtitle: 'Leander Kahney',
      status: 'Read',
      type: 'Biography',
      note: 'Management',
    },
    {
      id: 'b4',
      category: 'Reading',
      title: 'Elon Musk',
      subtitle: 'Walter Isaacson',
      status: 'Read',
      type: 'Biography',
      note: 'Technology',
    },
    {
      id: 'b5',
      category: 'Reading',
      title: '苏东坡新传',
      subtitle: '李一冰',
      status: 'Read',
      type: 'Biography',
      note: 'Life',
    },
    {
      id: 'b6',
      category: 'Reading',
      title: '小米创业思考',
      subtitle: '雷军',
      status: 'Read',
      type: 'Business',
      note: 'Business',
    },
    {
      id: 'b7',
      category: 'Reading',
      title: '小米创业思考',
      subtitle: '雷军',
      status: 'Read',
      type: 'Business',
      note: 'Business',
    },
    {
      id: 'b8',
      category: 'Reading',
      title: 'Sapiens: Brief History of Humankind',
      subtitle: 'Yuval Noah Harari',
      status: 'Read',
      type: 'History',
      note: 'Humankind',
    },
    {
      id: 'b9',
      category: 'Reading',
      title: 'Guns, Germs and Steel',
      subtitle: 'Jared Diamond',
      status: 'Read',
      type: 'History',
      note: 'Humankind',
    },
    {
      id: 'b10',
      category: 'Reading',
      title: 'How to hide an empire: a history of the greater United States',
      subtitle: 'Daniel Immerwahr',
      status: 'Read',
      type: 'History',
      note: 'USA',
    },
    // Adding more diverse books to reach > 25 for pagination demo
  ];
  return baseBooks;
};

export const interests: InterestItem[] = [
  // --- SPORTS ---
  {
    id: 's1',
    category: 'Sports',
    title: 'Soccer',
    subtitle: 'Messi, Pedri',
    note: 'Watching FC Barcelona.',
  },
  {
    id: 's2',
    category: 'Sports',
    title: 'Formula 1',
    subtitle: 'Max Verstappen, Charles Leclerc',
    note: 'Red Bull & Ferrari battles.',
  },
  {
    id: 's3',
    category: 'Sports',
    title: 'Tennis',
    subtitle: 'Novak Djokovic, Carlos Alcaraz',
    note: 'Grand Slam excitement.',
  },
  {
    id: 's4',
    category: 'Sports',
    title: 'Basketball',
    subtitle: 'Kobe Bryant, Jayson Tatum',
    note: 'NBA action.',
  },

  // --- MUSIC: ARTISTS LIST ---
  // We use a special item to hold the list of artists
  {
    id: 'm-artists-list',
    category: 'Music',
    title: 'Favorite Artists',
    items: ['The Beatles', 'Bob Dylan', 'David Tao', 'IU', 'SZA', 'Kendrick Lamar'],
  },

  // --- MUSIC: ALBUMS LIST ---
  {
    id: 'm-alb-1',
    category: 'Music',
    title: 'Abbey Road',
    subtitle: 'The Beatles',
    year: '1969',
    type: 'Rock',
  },
  {
    id: 'm-alb-2',
    category: 'Music',
    title: 'David Tao',
    subtitle: 'David Tao',
    year: '1997',
    type: 'R&B',
  },
  {
    id: 'm-alb-3',
    category: 'Music',
    title: 'Rumours',
    subtitle: 'Fleetwood Mac',
    year: '1977',
    type: 'Rock',
  },
  {
    id: 'm-alb-4',
    category: 'Music',
    title: 'good kid, m.A.A.d city',
    subtitle: 'Kendrick Lamar',
    year: '2012',
    type: 'Hip Hop',
  },
  {
    id: 'm-alb-5',
    category: 'Music',
    title: 'Orange Moon',
    subtitle: 'Khalil Fong',
    year: '2008',
    type: 'Soul / R&B',
  },
  {
    id: 'm-alb-6',
    category: 'Music',
    title: 'The Miseducation of Lauryn Hill',
    subtitle: 'Lauryn Hill',
    year: '1998',
    type: 'R&B / Neo Soul',
  },
  {
    id: 'm-alb-7',
    category: 'Music',
    title: 'Songs in the Key of Life',
    subtitle: 'Stevie Wonder',
    year: '1976',
    type: 'Soul / Funk',
  },
  {
    id: 'm-alb-8',
    category: 'Music',
    title: 'SOS',
    subtitle: 'SZA',
    year: '2022',
    type: 'R&B',
  },
  {
    id: 'm-alb-9',
    category: 'Music',
    title: 'Starboy',
    subtitle: 'The Weeknd',
    year: '2016',
    type: 'Pop / R&B',
  },
  {
    id: 'm-alb-10',
    category: 'Music',
    title: 'Nevermind',
    subtitle: 'Nirvana',
    year: '1991',
    type: 'Rock',
  },
  
  // READING
  ...generateBooks(),
];
