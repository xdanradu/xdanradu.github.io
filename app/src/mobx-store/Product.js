import { makeObservable, observable, action } from 'mobx';

export class Product {
  id = Math.random();
  title = '';
  description = '';
  quantity = 0;

  constructor(product) {
    makeObservable(this, {
      title: observable,
      quantity: observable,
      inc: action,
      dec: action,
      reset: action
    });
    this.title = product.title;
    this.id = product.id;
    this.description = product.description;
    this.quantity = product.quantity;
  }

  inc() {
    this.quantity++;
  }
  dec() {
    this.quantity--;
  }

  reset() {
    this.quantity = 0;
  }
}
