import {createElement} from '../../render.js';
import AbstractView from "../../framework/view/abstract-view";

const createListTemplate = () => '<ul class="trip-events__list"></ul>';

export class ListView extends AbstractView {

  get template() {
    createListTemplate();
  }
}
