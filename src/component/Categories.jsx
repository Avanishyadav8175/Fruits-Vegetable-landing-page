// Categories.jsx

import React from 'react';

const categories = ['Organic', 'Seasonal', 'Exotic'];

const Categories = () => {
  return (
    <div className="categories">
      <h2>Shop By Category</h2>
      {categories.map((category) => (
        <button key={category}>{category}</button>
      ))}
    </div>
  );
};

export default Categories;
