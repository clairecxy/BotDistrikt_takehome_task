import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MenuController extends Controller {
  @tracked quantity = 0;

  @action
  addQuantity(item) {
    // Increment the quantity for the selected menu item
    item.incrementProperty('quantity');
  }

  @action
  removeQuantity(item) {
    item.decrementProperty('quantity');
  }
}
