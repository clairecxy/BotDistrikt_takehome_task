/* eslint-disable prettier/prettier */
import { Model, attr, hasMany } from '@ember-data/model';

export default class MenuItemModel extends Model {
  @attr('string') item_name;
  @attr('number') price;
  @attr('string') description;
  @hasMany('orders') orders;
}
