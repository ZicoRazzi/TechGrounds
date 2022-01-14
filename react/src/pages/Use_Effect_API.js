import React, { useEffect, useState } from 'react';
import Home from '../pages/Home';
import SearchBar from '../components/SearchBar';

export default function Use_Effect_API() {
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((productsArray) => {
        const newProductsState = productsArray.map((product) => {
          return product.title;
        });
        setTimeout(() => {
          setProductsState(newProductsState);
        }, 3000);
      });
  }, []);

  const hasProducts = productsState.length > 0;

  return (
    <div>
      <Home />
      {hasProducts ? <SearchBar products={productsState} /> : 'Loading...'}
    </div>
  );
}
