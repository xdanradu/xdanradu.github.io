import React from 'react';
import './shop.scss';
import { observer } from 'mobx-react-lite';
import ProductCard from '../../components/card/card';

export const Shop = observer(({ store }) => (
  <div className="card-container">
    {store.products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
));

export default Shop;
