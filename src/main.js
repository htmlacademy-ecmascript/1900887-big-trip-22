import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/points-model.js';
import {HeaderPresenter} from './presenter/header-presenter.js';

const pointsModel = new PointsModel();
const mainContainer = document.querySelector('.trip-events');
const headerContainer = document.querySelector('.trip-controls__filters');
const boardPresenter = new BoardPresenter({eventsContainer: mainContainer, model: pointsModel});
const headerPresenter = new HeaderPresenter({eventsContainer: headerContainer});

headerPresenter.init();
boardPresenter.init();


