import AbstractStatefulView from '../../framework/view/abstract-stateful-view.js';

const createOfferTemplate = (offer, checkedOffers) => {
  const {id, title, price} = offer;
  const isSelected = checkedOffers.includes(id) ? 'checked' : '';
  return (`
  <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-${id}" type="checkbox" name="event-offer-luggage" ${isSelected}>
    <label class="event__offer-label" for="event-offer-luggage-${id}">
      <span class="event__offer-title">${title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </label>
  </div>`);
};

const createEditPointTemplate = (point, destinations, offers) => {
  const { basePrice, dateFrom, dateTo, type, destination, offers: selectedOffers } = point;
  const { name } = destinations.find((item) => item.id === point.destination);
  const typeOffers = offers.find((offer) => offer.type === type);
  const pointOffers = typeOffers ? typeOffers.offers.map((offer) => createOfferTemplate(offer, selectedOffers)).join('') : '';
  // const checkedOffers = pointOffers.filter((item) => point.offers.includes(item.id));
  const { description, pictures } = destinations.find((item) => item.id === destination);

  return `
    <li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

            <div class="event__type-item">
              <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
              <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
              <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
              <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
              <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
              <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
              <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
              <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
              <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
              <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
            </div>
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-${point.id}">
          ${type}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-${point.id}" type="text" name="event-destination" value="${name}" list="destination-list-${point.id}">
        <datalist id="destination-list-${point.id}">
          ${destinations ? destinations.map((item) => `<option value="${item.name}"></option>`).join('') : ''}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-${point.id}">From</label>
        <input class="event__input  event__input--time" id="event-start-time-${point.id}" type="text" name="event-start-time" value="${dateFrom}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-${point.id}">To</label>
        <input class="event__input  event__input--time" id="event-end-time-${point.id}" type="text" name="event-end-time" value="${dateTo}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-${point.id}">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-${point.id}" type="text" name="event-price" value="${basePrice}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          ${pointOffers}
        </div>
      </section>
      ${description ? `
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${ description }<p>
        ${pictures.length ? `
        <div class="event__photos-container">
              <div class="event__photos-tape">
                ${pictures.map((pic) => `<img class="event__photo" src="${pic.src}" alt="${pic.description}">`)}
              </div>
           </div>` : ''}
      </section>` : ''}
    </section>
  </form>
  </li>
  `;
};

export class EditPointView extends AbstractStatefulView {

  #handleSubmit;
  #handleClose;
  #handleDelete;
  #point = null;
  #destinations = null;
  #offers = null;

  constructor({point, destination, offers, onSubmit, onClose, onDelete}) {
    super();
    this.#point = point;
    this.#destinations = destination;
    this.#offers = offers;
    this.#handleSubmit = onSubmit;
    this.#handleClose = onClose;
    this.#handleDelete = onDelete;

    this._setState(EditPointView.parsePointToState({point}));
    this._restoreHandlers();
  }

  get template() {
    return createEditPointTemplate(this._state, this.#destinations, this.#offers);
  }

  #onFormSubmit = (evt) => {
    evt.preventDefault();
    this.#handleSubmit();
  };

  #onFormClose = () => {
    this.#handleClose();
  };

  #onTypeChange = (evt) => {
    this.updateElement({...this._state.point, type: evt.target.value, offers: []});
  };

  #onDestinationChange = (evt) => {
    const selectedDestination = this.#destinations.find((destination) => destination.name === evt.target.value);
    const selectedDestinationId = (selectedDestination) ? selectedDestination.id : null;
    this.updateElement({...this._state.point, destination: selectedDestinationId});
  };

  #onPriceChange = (evt) => {
    evt.preventDefault();
    this._setState({
      basePrice: evt.target.value
    });
  };

  #onOffersChange = () => {
    const selectedOffers = Array.from(this.element.querySelectorAll('.event__offer-checkbox:checked')).map((input) => input.id);
    this._setState({
      offers: selectedOffers,
    });
    this.updateElement(this._state);
  };

  reset(point) {
    this.updateElement(EditPointView.parsePointToState(point));
  }

  _restoreHandlers = () => {
    this.element.querySelector('.event__save-btn').addEventListener('click', this.#onFormSubmit);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#onFormClose);
    this.element.querySelectorAll('.event__type-input').forEach((radio) => radio.addEventListener('change', this.#onTypeChange));
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#onDestinationChange);
    this.element.querySelector('.event__input--price').addEventListener('input', this.#onPriceChange);
    this.element.querySelectorAll('.event__offer-checkbox').forEach((checkbox) => {
      checkbox.addEventListener('change', this.#onOffersChange);
    });

    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#handleDelete);
  };

  static parsePointToState = ({point}) => ({...point});

  static parseStateToPoint = (state) => state.point;
}
