// Создать объект counter всеми возможными способами;

const counter = { counter: 'counter'}
const counter1 = new Object()
const counter2 = Object.create({})
const counter3 = Object.assign({}, counter, counter1)


class Counter {
  constructor(counter){
    this.counter = counter
  }
}

const counter4 = new Counter(4)