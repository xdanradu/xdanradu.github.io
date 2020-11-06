import React from 'react';
import { EmptyCheckout } from './empty-checkout';
import { ProductList } from './product-list';

export function Products(props) {
  const { products, onDecrement, onIncrement, onReset, onCleared } = props;
  let isEmpty = products.filter(c => c.value > 0).length === 0;

  if (isEmpty) {
    return <EmptyCheckout />;
  } else {
    return (
      <ProductList
        key="products"
        products={products}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        onReset={onReset}
        onCleared={onCleared}
      />
    );
  }
}
