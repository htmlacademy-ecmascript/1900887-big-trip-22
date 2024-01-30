import {render} from '../render.js';
import {SortView} from '../view/sort/sort-view.js';
import {ListView} from '../view/point/list-view.js';
import PointView from '../view/point/point-view.js';
import {AddPointView} from '../view/point/add-point-view.js';

export default class BoardPresenter {
  sortPointsComponent = new SortView();
  listPointsComponent = new ListView();

  constructor({eventsContainer, model}) {
    this.eventsContainer = eventsContainer;
    this.model = model;
  }

  init() {
    this.boardPoints = this.model.getPoints();
    render(this.sortPointsComponent, this.eventsContainer);
    render(this.listPointsComponent, this.eventsContainer);
    render(new AddPointView(this.model.getOffers(this.boardPoints[0].type)), this.listPointsComponent.getElement());

    for (let i = 0 ; i < 3; i++) {
      render (new PointView({
          point: this.boardPoints[i],
          destination: this.model.getDestinationByID(this.boardPoints[i].destination),
          offers: this.model.getOfferById(this.boardPoints[i].type, this.boardPoints[i].offers),
        }), this.listPointsComponent.getElement()
      )
    }
  }
}
