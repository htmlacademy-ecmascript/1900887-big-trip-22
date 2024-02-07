import {POINTS} from '../mock/points.js';
import {DESTINATIONS} from '../mock/destinations.js';
import {OFFERS} from '../mock/offers.js';
import Observable from '../framework/observable.js';

export default class PointsModel extends Observable {
  #points;
  #destinations;
  #offers;

  init() {
    this.#points = POINTS;
    this.#offers = OFFERS;
    this.#destinations = DESTINATIONS;
  }

  get points() {
    return this.#points;
  }

  set points(routePoints) {
    this.#points = [...routePoints];
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }

  updatePoint(updateType, updated) {
    const index = this.#points.findIndex((task) => task.id === updated.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting task');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      updated,
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType, updated);
  }

  addPoint(updateType, added) {
    const isPointExists = this.#points.some((point) => point.id === added.id);
    if (!isPointExists) {
      this.#points = [...this.#points, added];
      this._notify(updateType, added);
    }
  }

  deletePoint(updateType, point) {
    const updatedPoints = this.#points.filter((item) => item.id !== point.id);
    this.#points = updatedPoints;
    this._notify(updateType);
  }

  getContentById(id) {
    const point = this.#points.find((item) => item.id === id);
    const destination = this.#destinations.find((item) => item.id === point.destination);
    const offers = this.#offers.find((item) => item.type === point.type.toLocaleLowerCase());

    return {
      point: point ?? {},
      destination: destination ?? {},
      offers: offers.offers ?? {}
    };
  }

  getDestinationByID(id) {
    const allDestinations = this.getDestinations();
    return allDestinations.find((destination) => destination.id === id);
  }

  getOffersById(type, offers) {
    const currentOffer = this.offers.find((item) => item.type === type).offers;
    return currentOffer.filter((item) => offers.includes(item.id));
  }

  getCheckedOffer() {}
}
