import {createElement} from '../../render.js';

const createEmptyListTemplate = () => (
  `
    <section class="trip-events">
      <h2 class="visually-hidden">Trip events</h2>
      <p class="trip-events__msg">Click New Event to create your first point</p>
    </section>
  `
);

export class EmptyListView {
  getTemplate() {
    return createEmptyListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
