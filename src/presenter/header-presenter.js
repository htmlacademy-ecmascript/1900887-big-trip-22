import {HeaderView} from '../view/point/header-view.js';
import {ListFilterView} from '../view/filter/list-filter-view.js';
import {render, RenderPosition} from '../render.js';


export class HeaderPresenter {
  tripMainContainer = document.querySelector('.trip-main');
  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(new ListFilterView(), this.eventsContainer);
    render(new HeaderView(), this.tripMainContainer, RenderPosition.AFTERBEGIN);
  }
}
