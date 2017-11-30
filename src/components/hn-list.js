import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import '../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import lists, { currentItemsSelector, currentListSelector } from '../reducers/lists.js';
import { pageParamSelector } from '../reducers/location.js';
import items from '../reducers/items.js';
import favorites from '../reducers/favorites.js';
import { store } from '../store.js';
import './hn-summary.js';
import { fetchList } from '../actions/lists.js';
import { loadFavorites } from '../actions/favorites.js';
import { connect } from '../../lib/connect-mixin.js';
import { sharedStyles } from './shared-styles.js';

store.addReducers({
  lists,
  favorites,
  items
});

store.dispatch(loadFavorites());

export class HnListElement extends connect(store)(PolymerElement) {
  static get template() {
    return `
    ${sharedStyles}
    <button on-click="_reload">Reload</button>
    <dom-repeat items="[[items]]">
      <template>
        <hn-summary item="[[item]]" is-favorite="[[_isFavorite(favorites, item)]]"></hn-summary>
      </template>
    </dom-repeat>
    <a href$="[[_getPreviousPageHref(page)]]">Previous Page</a>
    <a href$="[[_getNextPageHref(page)]]">Next Page</a>
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
      const props = {
        favorites: state.favorites,
        list,
        page: pageParamSelector(state)
      };
      const items = currentItemsSelector(state);
      if (items) {
        props.items = items;
      }
      this.setProperties(props);
    }
  }

  _isFavorite(favorites, item) {
    return Boolean(favorites && item && favorites[item.id]);
  }
  
  _reload() {
    store.dispatch(fetchList(this.list, this.page));
  }

  _getPreviousPageHref(page) {
    return page > 1 ? `?page=${page-1}` : null;
  }

  _getNextPageHref(page) {
    return `?page=${page+1}`;
  }
}

customElements.define('hn-list', HnListElement);

export { currentListSelector, fetchList, pageParamSelector };
