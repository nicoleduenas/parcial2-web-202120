import React, { useState, useEffect } from 'react';
import { Chart } from "../components/Chart";
export const Report = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () =>{
      const response = await fetch(' http://localhost:3001/api/products')
      const productsData = await response.json()
      setProducts(productsData)
    };
    fetchProducts()
  }, [])

  return (
    <section id='report'>
      <div className='report-container'>
        <h1>Unidades en inventario</h1>
        <Chart data={products}></Chart>
      </div>
    </section>
  );
};
