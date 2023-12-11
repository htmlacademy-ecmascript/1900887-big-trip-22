import BoardPresenter from './presenter/board-presenter.js';
import {HeaderPresenter} from './presenter/header-presenter.js';

const mainContainer = document.querySelector('.trip-events');
const headerContainer = document.querySelector('.trip-main');
const boardPresenter = new BoardPresenter({eventsContainer: mainContainer});
const headerPresenter = new HeaderPresenter({eventsContainer: headerContainer});

headerPresenter.init();
boardPresenter.init();


