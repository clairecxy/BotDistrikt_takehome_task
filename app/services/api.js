import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class ApiService extends Service {
  @service ajax;

  //Menu
  getMenuItems() {
    return this.ajax.request('/api/menu-items');
  }

  createMenuItem(data) {
    return this.ajax.post('/api/menu-items', { data });
  }

  getMenuItemById(itemId) {
    return this.ajax.request(`/api/menu-items/${itemId}`);
  }

  updateMenuItem(itemId, newData) {
    return this.ajax.put(`/api/menu-items/${itemId}`, { data: newData });
  }

  deleteMenuItem(itemId) {
    return this.ajax.delete(`/api/orders-items/${itemId}`);
  }

  //Orders
  getOrdersItems() {
    return this.ajax.request('/api/orders');
  }

  createOrdersItem(data) {
    return this.ajax.post('/api/orders', { data });
  }

  getOrdersItemById(itemId) {
    return this.ajax.request(`/api/orders/${itemId}`);
  }

  updateOrdersItem(itemId, newData) {
    return this.ajax.put(`/api/orders/${itemId}`, { data: newData });
  }

  deleteOrdersItem(itemId) {
    return this.ajax.delete(`/api/orders/${itemId}`);
  }

  // OrderItems
  getOrderedItemsItems() {
    return this.ajax.request('/api/orderedItems');
  }

  createOrderedItemsItem(data) {
    return this.ajax.post('/api/orderedItems', { data });
  }

  getOrderedItemsItemById(itemId) {
    return this.ajax.request(`/api/orderedItems/${itemId}`);
  }

  updateOrderedItemsItem(itemId, newData) {
    return this.ajax.put(`/api/orderedItems/${itemId}`, { data: newData });
  }

  deleteOrderedItemsItem(itemId) {
    return this.ajax.delete(`/api/orderedItems/${itemId}`);
  }

  //Customer
  getCustomerItems() {
    return this.ajax.request('/api/customers');
  }

  createCustomerItem(data) {
    return this.ajax.post('/api/customers', { data });
  }

  getCustomerItemById(itemId) {
    return this.ajax.request(`/api/customers/${itemId}`);
  }

  updateCustomerItem(itemId, newData) {
    return this.ajax.put(`/api/customers/${itemId}`, { data: newData });
  }

  deleteCustomerItem(itemId) {
    return this.ajax.delete(`/api/customers/${itemId}`);
  }
}
