// ProductCard.jsx

import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={Apple} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span className="price">${product.price}</span>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
