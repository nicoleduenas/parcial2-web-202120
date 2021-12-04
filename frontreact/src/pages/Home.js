import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { FormattedMessage } from "react-intl";
export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () =>{
      const response = await fetch(' http://localhost:3001/api/products?q='.concat(searchKey))
      const productsData = await response.json()
      setProducts(productsData)
    };
    fetchProducts()
  }, [searchKey])

  return (
    <section id='home'>
      <div className='home-container'>
        <h1><FormattedMessage id="gallery" /></h1>
        <div className='home-card'>
          {products.map((e, i) => (
            <Card key={i} name={e.name} picture={e.picture} price={e.price} isActive={e.isActive==='true'}  />
          ))}
        </div>
      </div>
    </section>
  );
};
