import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class NavbarComponent extends Component {
  @tracked links = [
    { label: 'Menu', route: 'menu' },
    // Add more links as needed
  ];
}
