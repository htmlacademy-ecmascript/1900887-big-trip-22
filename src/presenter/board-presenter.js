import {render} from '../render.js';
import {ListSortView} from '../view/sort/list-sort-view.js';
import {ListView} from '../view/point/list-view.js';
import {EditPointView} from '../view/point/edit-point-view.js';
import {PointView} from '../view/point/point-view.js';
import {AddPointView} from '../view/point/add-point-view.js';
import {PointWithoutDestinationView} from '../view/point/point-without-destination-view.js';
import {PointWithoutOffersView} from '../view/point/point-without-offers-view.js';

export default class BoardPresenter {
  sortComponent = new ListSortView();
  listComponent = new ListView();

  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(this.sortComponent, this.eventsContainer);
    render(this.listComponent, this.eventsContainer);
    render(new EditPointView(), this.listComponent.getElement());
    render(new AddPointView(), this.listComponent.getElement());
    render(new PointWithoutDestinationView(), this.listComponent.getElement());
    render(new PointWithoutOffersView(), this.listComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.listComponent.getElement());
    }
  }
}
