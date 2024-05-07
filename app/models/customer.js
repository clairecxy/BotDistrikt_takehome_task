/* eslint-disable prettier/prettier */
import { Model, attr, hasMany } from '@ember-data/model';

export default class CustomerModel extends Model {
  @attr('number') user_id;
  @attr('string') username;
  @hasMany('orders') orders;
}
