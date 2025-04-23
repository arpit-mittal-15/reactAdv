import React from 'react'

const ProductList = () => {

  const products = [
    {id: 1, name:"Phone", price:"$699"},
    {id: 2, name:"Laptop", price:"$1200"},
    {id: 3, name:"Headphones", price:"$199"},
  ];

  return (
    <main>
      {products.map(({id, name, price}) => (
        <ul key={id}>
          <li>{id}</li>
          <li>{name}</li>
          <li>{price}</li>
        </ul>
      ))}
    </main>
  )
}

export default ProductList