import Component from '@glimmer/component';
export default class MenuItemComponent extends Component {
  counters = [];

  addCounter() {
    this.counters.push(0);
  }

  removeCounter(index) {
    this.counters.splice(index, 1);
  }

  incrementCounter(index) {
    if (this.counters[index] === undefined) {
      this.counters[index] = 0; // Initialize the counter if it doesn't exist
    }
    this.counters[index]++;
  }

  decrementCounter(index) {
    if (this.counters[index] === undefined) {
      this.counters[index] = 0; // Initialize the counter if it doesn't exist
    }
    if (this.counters[index] > 0) {
      this.counters[index]--;
    }
  }
}
