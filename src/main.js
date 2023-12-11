import BoardPresenter from './presenter/board-presenter.js';
import {render} from './render.js';
import {ListFilterView} from './view/filter/list-filter-view.js';
import {HeaderPresenter} from "./presenter/header-presenter";

const mainContainer = document.querySelector('.trip-events');
const headerContainer = document.querySelector('.trip-main');
const boardPresenter = new BoardPresenter({eventsContainer: mainContainer});
const headerPresenter = new HeaderPresenter({eventsContainer: headerContainer});

headerPresenter.init();
boardPresenter.init();


