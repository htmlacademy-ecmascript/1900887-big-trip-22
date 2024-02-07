import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';

const pointsModel = new PointsModel();
pointsModel.init();

const mainContainer = document.querySelector('.trip-events');
const boardPresenter = new TripPresenter({eventsContainer: mainContainer, model: pointsModel});

boardPresenter.init();


