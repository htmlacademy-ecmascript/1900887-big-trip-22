import {SortView} from '../view/sort/sort-view.js';
import {ListView} from '../view/point/list-view.js';
import PointView from '../view/point/point-view.js';
import {render, replace} from '../framework/render.js';
import {EditPointView} from '../view/point/edit-point-view.js';

export default class BoardPresenter {
  #sortPointsComponent = new SortView();
  #listPointsComponent = new ListView();

  #model = null;
  #eventsContainer = null;
  #boardPoints = null;

  constructor({eventsContainer, model}) {
    this.#eventsContainer = eventsContainer;
    this.#model = model;
  }

  #renderPoint(point) {
    const destination = this.#model.getDestinationByID(point.destination);
    const checkedOffers = this.#model.getOffersById(point.type, point.offers);
    const offers = this.#model.getOffers(point.type);

    const onEscClick = (evt) => {
      if (evt.key === 'Escape') {
        replaceFormToPoint();
      }
    };

    const onEditBtnClick = () => replacePointToForm();

    const onSubmit = () => replaceFormToPoint();

    const onClose = () => replaceFormToPoint();

    const pointComponent = new PointView(point, destination, checkedOffers, onEditBtnClick);

    const editPointComponent = new EditPointView(point, destination, offers, onSubmit, onClose);

    function replaceFormToPoint() {
      replace(pointComponent, editPointComponent);
      document.removeEventListener('keydown', onEscClick);
    }

    function replacePointToForm() {
      replace(editPointComponent, pointComponent);
      document.addEventListener('keydown', onEscClick);
    }

    render(pointComponent, this.#listPointsComponent.element);
  }

  #renderPoints() {
    render(this.#sortPointsComponent, this.#eventsContainer);
    render(this.#listPointsComponent, this.#eventsContainer);

    for (let i = 0; i < this.#boardPoints.length; i++) {
      this.#renderPoint(this.#boardPoints[i]);
    }
  }

  init() {
    this.#boardPoints = [...this.#model.points];
    this.#renderPoints();
  }
}
