import { remove, render, replace } from '../framework/render.js';
import { EditPointView } from '../view/point/edit-point-view.js';
import PointView from '../view/point/point-view.js';

export default class PointPresenter {
  #point = null;
  #pointComponent = null;
  #editPointComponent = null;
  #listPointsComponent = null;
  #handleDataChange;
  #onPointEditOpen;
  #isEditMode = false;

  constructor({destinations, offers, listPointsComponent, onDataChange, onEditClick}) {
    this.destinations = destinations;
    this.offers = offers;
    this.#listPointsComponent = listPointsComponent;
    this.#handleDataChange = onDataChange;
    this.#onPointEditOpen = onEditClick;
  }

  init(point) {
    this.#point = point;

    const prevPointComponent = this.#pointComponent;
    const prevEditComponent = this.#editPointComponent;

    this.#pointComponent = new PointView({
      point: this.#point,
      destinations: this.destinations,
      offers: this.offers,
      onClick: this.#onEditBtnClick,
      onFavouriteClick: this.#onFavouriteClick});

    this.#editPointComponent = new EditPointView(
      this.#point,
      this.destinations,
      this.offers,
      this.#onSubmit,
      this.#onClose);

    if (prevPointComponent === null || prevEditComponent === null) {
      render(this.#pointComponent, this.#listPointsComponent.element);
      return;
    }

    replace(this.#pointComponent, prevPointComponent);

    remove(prevPointComponent);
    remove(prevEditComponent);
  }

  #onEditBtnClick = () => this.#replacePointToForm();

  #onSubmit = () => this.#replaceFormToPoint();

  #onClose = () => this.#replaceFormToPoint();

  #onFavouriteClick = () => this.#setIsFavorite();

  #onEscClick = (evt) => {
    if (evt.key === 'Escape') {
      this.#replaceFormToPoint();
    }
  };

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#editPointComponent);
    document.removeEventListener('keydown', this.#onEscClick);
    this.#isEditMode = false;
  }

  #replacePointToForm() {
    replace(this.#editPointComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#onEscClick);
    this.#onPointEditOpen();
    this.#isEditMode = true;
  }

  #setIsFavorite() {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  }

  reset = () => {
    if (this.#isEditMode) {
      this.#replaceFormToPoint();
    }
  };
}