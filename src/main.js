import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/points-model.js';

const pointsModel = new PointsModel();
const mainContainer = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({eventsContainer: mainContainer, model: pointsModel});

boardPresenter.init();


