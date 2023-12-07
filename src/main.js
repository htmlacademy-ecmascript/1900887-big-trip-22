
import BoardPresenter from "./presenter/board-presenter";
import {render} from "./render";
import {ListFilterView} from "./view/filter/list-filter-view";

const mainContainer = document.querySelector('.trip-events');
const headerContainer = document.querySelector('.trip-main');
const boardPresenter = new BoardPresenter({eventsContainer: mainContainer});

render(new ListFilterView(), headerContainer);

boardPresenter.init();

