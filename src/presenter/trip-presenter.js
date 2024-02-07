import {SortView} from '../view/sort/sort-view.js';
import {ListView} from '../view/point/list-view.js';
import {render} from '../framework/render.js';
import PointPresenter from './point-presenter.js';
import { updatePoint } from '../utils/utils.js';

export default class TripPresenter {
  #sortPointsComponent = new SortView();
  #listPointsComponent = new ListView();

  #model = null;
  #eventsContainer = null;

  #points = null;
  #destinations = null;
  #offers = null;

  #pointsPresenter = new Map();

  constructor({eventsContainer, model}) {
    this.#eventsContainer = eventsContainer;
    this.#model = model;
  }

  #renderPoint(point, destinations, offers) {
    const pointPresenter = new PointPresenter({
      destinations: destinations,
      offers: offers,
      listPointsComponent: this.#listPointsComponent,
      onDataChange: this.#handlePointsDataChange,
      onEditClick: this.#onPointEditOpen,
    });

    this.#pointsPresenter.set(point.id, pointPresenter);
    pointPresenter.init(point);
  }

  #renderPoints() {
    this.#points.forEach((point) => this.#renderPoint(point, this.#destinations, this.#offers));
  }

  #renderBoard() {
    render(this.#sortPointsComponent, this.#eventsContainer);
    render(this.#listPointsComponent, this.#eventsContainer);

    this.#renderPoints();
  }

  #handlePointsDataChange = (actionType, updateType, update) => {
    switch (actionType) {
      case 'UPDATE':
        this.#model.updatePoint(updateType, update);
        break;
      case 'ADD':
        this.#model.addPoint(updateType, update);
        break;
      case 'DELETE':
        this.#model.deletePoint(updateType, update);
        break;
    }
  };

  #onPointEditOpen = () => {
    this.#pointsPresenter.forEach((pointPresenter) => pointPresenter.resetView());
  };

  init() {
    this.#points = [...this.#model.points];
    this.#destinations = [...this.#model.destinations];
    this.#offers = [...this.#model.offers];

    this.#renderBoard();
  }
}
