/* eslint-disable prettier/prettier */
import Service from '@ember/service';

export default class CounterService extends Service {
  counters = [];

  addCounter() {
    this.counters.push(0);
  }

  removeCounter(index) {
    this.counters.splice(index, 1);
  }

  incrementCounter(index) {
    this.counters[index]++;
  }

  decrementCounter(index) {
    if (this.counters[index] > 0) {
      this.counters[index]--;
    }
  }
}
