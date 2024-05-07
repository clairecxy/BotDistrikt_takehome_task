import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MenuRoute extends Route {
  @service api;

  async model() {
    return [
      {
        index: 1,
        item_image: '/images/menu-img-burger.jpg',
        item_name: 'Bacon Burger',
        desc: 'Flavourful, juicy patty paired with wholegrain wheat buns and homemade BBQ sauce',
        price: '$13.80',
      },
      {
        item_image: '/images/menu-img-croissant.png',
        item_name: 'Classic Croissant',
        desc: 'Flavourful, juicy patty paired with wholegrain wheat buns and homemade BBQ sauce',
        price: '$13.80',
      },
      {
        item_image: '/images/menu-img-ice-cream.png',
        item_name: 'Classic Croissant',
        desc: 'Flavourful, juicy patty paired with wholegrain wheat buns and homemade BBQ sauce',
        price: '$13.80',
      },
    ];
  }
}
