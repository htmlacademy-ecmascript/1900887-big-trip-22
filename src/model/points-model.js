import {POINTS} from '../mock/points.js';
import {DESTINATIONS} from '../mock/destinations.js';
import {OFFERS} from '../mock/offers.js';

export default class PointsModel {
  points = POINTS;
  destinations = DESTINATIONS;
  offers = OFFERS;

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getDestinationByID(id) {
    const allDestinations = this.getDestinations();
    return allDestinations.find((destination) => destination.id === id);
  }

  getOffers(type) {
    return this.offers.find((offer) => offer.type === type);
  }

  getOfferById(type, offers) {
    const currentOffer = this.offers.find((item) => item.type === type).offers;
    return currentOffer.filter((item) => offers.includes(item.id));
  }

  getCheckedOffer() {}
}
