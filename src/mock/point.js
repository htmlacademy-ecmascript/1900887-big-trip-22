import {getRandomArrayElement} from '../utils.js';
import {OFFERS, POINT_TYPES} from '../const.js';


const mockPoints = [
  {
    type: getRandomArrayElement(POINT_TYPES),
    time: '10:30 — 11:00',
    event: {
      eventDuration: '20M',
      eventPrice: '20',
    },
    destination: 'Geneva',
    destinationDescription: null,
    offers: OFFERS,
    favourite: false
  },
  {
    type: getRandomArrayElement(POINT_TYPES),
    time: '10:30 — 11:00',
    event: {
      eventDuration: '10M',
      eventPrice: '20',
    },
    destination: 'Chamonix',
    destinationDescription: null,
    offers: OFFERS,
    favourite: false
  },
  {
    type: getRandomArrayElement(POINT_TYPES),
    time: '10:30 — 11:00',
    event: {
      eventDuration: '30M',
      eventPrice: '20',
    },
    destination: 'Amsterdam',
    destinationDescription: null,
    offers: OFFERS,
    favourite: false
  },
];

const getRandomPoint = () => getRandomArrayElement(mockPoints);

export {getRandomPoint};
