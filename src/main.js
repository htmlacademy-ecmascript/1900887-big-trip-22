import BoardPresenter from './presenter/board-presenter.js';
import {render} from './render.js';
import {ListFilterView} from './view/filter/list-filter-view.js';

const mainContainer = document.querySelector('.trip-events');
const headerContainer = document.querySelector('.trip-main');
const boardPresenter = new BoardPresenter({eventsContainer: mainContainer});

render(new ListFilterView(), headerContainer);

boardPresenter.init();

