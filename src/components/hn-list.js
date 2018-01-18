import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js';
import { repeat } from '../../node_modules/lit-html/lib/repeat.js';
import lists, { currentItemsSelector, currentListSelector } from '../reducers/lists.js';
import { pageParamSelector } from '../reducers/location.js';
import items from '../reducers/items.js';
import favorites from '../reducers/favorites.js';
import { store } from '../store.js';
import './hn-loading-button.js';
import './hn-summary.js';
import { fetchList, fetchListIfNeeded } from '../actions/lists.js';
import { loadFavorites } from '../actions/favorites.js';
import { connect } from '../../lib/connect-mixin.js';
import { sharedStyles } from './shared-styles.js';

store.addReducers({
  lists,
  favorites,
  items
});

store.dispatch(loadFavorites());

export class HnListElement extends connect(store)(LitElement) {
  render({ favorites, items = [], list, page }) {
    const pages = list.pages;
    const loading = pages && pages[page] && pages[page].isFetching;
    return html`
    <style>${sharedStyles}</style>
    ${
      list.id !== 'favorites' ?
      html`
        <hn-loading-button
            loading="${loading}"
            on-click="${() => store.dispatch(fetchList(list, page))}">
        </hn-loading-button>
      ` :
      null
    }
    ${repeat(items, (item) => html`
      <hn-summary
          item="${item}"
          isFavorite="${favorites && item && favorites[item.id]}">
      </hn-summary>
    `)}
    ${
      list.id !== 'favorites' ?
      html`
        <a href="${`?page=${Math.max(page-1, 1)}`}">Previous Page</a>
        <a href="${`?page=${page+1}`}">Next Page</a>
      ` :
      null
    }
    `;
  }

  static get properties() {
    return {
      list: Object,

      favorites: Object,

      items: Array,

      page: Number
    }
  }

  update(state) {
    const list = currentListSelector(state);
    if (list) {
      document.title = list.id;
      document.body.setAttribute('list', list.id);
      this.favorites = state.favorites;
      this.list = list;
      this.page = pageParamSelector(state);
      const items = currentItemsSelector(state);
      if (items) {
        this.items = items;
      }
    }
  }
}

customElements.define('hn-list', HnListElement);

export { currentListSelector, fetchListIfNeeded, pageParamSelector };
