import {getRandomNumber} from './utils.js';

export const POINTS = [
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a28081',
    basePrice: getRandomNumber(10000),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e03',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa31',
      'b4c3e4e6-9053-42ce-b747-e281314baa32',
      'b4c3e4e6-9053-42ce-b747-e281314baa33'
    ],
    type: 'taxi'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    basePrice: getRandomNumber(10000),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa34',
      'b4c3e4e6-9053-42ce-b747-e281314baa35',
    ],
    type: 'flight'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808t',
    basePrice: getRandomNumber(10000),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e05',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa35',
      'b4c3e4e6-9053-42ce-b747-e281314baa34'
    ],
    type: 'bus'
  }
];
