import { makeObservable, observable, computed } from 'mobx';
import { Product } from './Product';

export class Store {
  products = [];
  get total() {
    return this.products.reduce((accumulator, object) => {
      return accumulator + object.quantity;
    }, 0);
  }
  get distinctLength() {
    return this.products.filter(product => product.quantity).length;
  }

  constructor() {
    makeObservable(this, {
      products: observable,
      total: computed,
      distinctLength: computed
    });
    let products = [
      {
        id: 1,
        quantity: 0,
        title: 'JavaScript',
        description: 'Angular, React, VueJS, NodeJS'
      },
      { id: 2, quantity: 0, title: 'HTML/CSS', description: 'UI/UX' },
      {
        id: 3,
        quantity: 0,
        title: 'Java',
        description: 'Spring boot, JWT, Hibernate, Flyway'
      },
      {
        id: 4,
        quantity: 0,
        title: 'C#',
        description: "Rest API's, 3 Tier Architecture"
      },
      {
        id: 5,
        quantity: 0,
        title: 'SQL',
        description: 'PosgreSQL, SQL Server, MySQL'
      }
    ];

    products.forEach(product => {
      this.add(new Product(product));
    });
  }

  add(product) {
    this.products.push(product);
  }

  reset() {
    console.log('reset');
    this.products.forEach(product => {
      product.quantity = 0;
    });
  }
}
