/* eslint-disable prettier/prettier */
import { Model, attr, belongsTo, hasMany} from '@ember-data/model';

export default class OrderedItemsModel extends Model {
  @attr('number') order_id;
  @attr('number') user_id;
  @attr('number') total_bill;
  @belongsTo('customer') customer;
  @hasMany('menu_item') menuItems;
}
