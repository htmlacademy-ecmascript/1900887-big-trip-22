import {HeaderView} from '../view/point/header-view.js';
import {render} from '../render.js';
import {ListFilterView} from '../view/filter/list-filter-view.js';


export class HeaderPresenter {
  headerComponent = new HeaderView();

  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(this.headerComponent, this.eventsContainer, 'afterbegin');
    render(new ListFilterView(), this.eventsContainer);
  }
}
