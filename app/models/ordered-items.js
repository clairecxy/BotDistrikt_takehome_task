/* eslint-disable prettier/prettier */
import { Model, attr, belongsTo } from '@ember-data/model';

export default class OrderedItemsModel extends Model {
  @attr('number') quantity;
  @belongsTo('menu_item') menuItem;
  @belongsTo('orders') orders;
}
