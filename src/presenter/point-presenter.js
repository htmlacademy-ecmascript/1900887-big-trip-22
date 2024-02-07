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
  #onDeleteClick;
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

    this.#editPointComponent = new EditPointView({
      point: this.#point,
      destination: this.destinations,
      offers: this.offers,
      onSubmit: this.#onSubmit,
      onClose: this.#onClose,
      onDelete: this.#onDelete});

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

  #onDelete = () => {

  };

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

  resetView = () => {
    if (this.#isEditMode) {
      this.#editPointComponent.reset(this.#point);
      this.#replaceFormToPoint();
    }
  };
}
