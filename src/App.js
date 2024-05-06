
import React, { useState } from 'react';
import './App.css';
const LandingPage = () => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for filtered products
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  // Dummy data for products
  const products = [
    { id: 1, name: 'Apple', category: 'Organic', price: 1.99, freshness: 'Fresh', nutritionalValue: 'High in dietary fiber, vitamin C, and various antioxidants. Apples are known to support heart health, aid in weight loss, and improve digestion.', image:"https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGV8ZW58MHx8MHx8fDA%3D" },
    { id: 2, name: 'Banana', category: 'Organic', price: 0.99, freshness: 'Fresh', nutritionalValue: 'Rich in potassium, vitamin B6, and vitamin C. Bananas provide energy, regulate blood sugar levels, and support digestive health.',image:'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5hfGVufDB8fDB8fHww' },
    { id: 3, name: 'Mango', category: 'Exotic', price: 2.49, freshness: 'Fresh', nutritionalValue: 'Loaded with vitamin C, vitamin A, and antioxidants. Mangos promote eye health, boost immunity, and support skin health.',image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 4, name: 'Spinach', category: 'Organic', price: 2.99, freshness: 'Fresh', nutritionalValue: 'Packed with iron, vitamin K, and folate. Spinach helps in improving bone health, regulating blood pressure, and boosting metabolism.',image:'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 5, name: 'Strawberry', category: 'Seasonal', price: 3.49, freshness: 'Fresh', nutritionalValue: 'High in vitamin C, manganese, and antioxidants. Strawberries aid in heart health, reduce inflammation, and support skin elasticity.',image:'https://plus.unsplash.com/premium_photo-1667049291185-6270613405aa?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  // Filter products based on search query
  const handleSearch = () => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Filter products based on category
  const filterByCategory = (category) => {
    const filtered = products.filter(product =>
      product.category.toLowerCase() === category.toLowerCase()
    );
    setFilteredProducts(filtered);
  };

  // Sort products by price
  const sortByPrice = (order) => {
    const sorted = [...products].sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
    setFilteredProducts(sorted);
  };

  // Render products
  const renderProducts = () => {
    const data = filteredProducts.length ? filteredProducts : products;
    return data.map(product => (
      <div key={product.id} className="product">
      <img src={product.image} alt={product.name} height={100} width={100}/>
        <h3>{product.name}</h3>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Freshness: {product.freshness}</p>
        <p>Nutritional Value: {product.nutritionalValue}</p>
      </div>
    ));
  };
  
  return (
    <div className="landing-page">
      <h1>Welcome to our Fresh Produce Marketplace</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for fruits and vegetables"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="filters">
        <button onClick={() => filterByCategory('Organic')}>Organic</button>
        <button onClick={() => filterByCategory('Seasonal')}>Seasonal</button>
        <button onClick={() => filterByCategory('Exotic')}>Exotic</button>
        <button onClick={() => setFilteredProducts([])}>Clear Filters</button>
        <button onClick={() => sortByPrice('asc')}>Sort by Price (Low to High)</button>
        <button onClick={() => sortByPrice('desc')}>Sort by Price (High to Low)</button>
      </div>
      <div className="products">
        {renderProducts()}
      </div>
      <div className="information">
        <h2>Health Benefits of Fresh Produce</h2>
        <p>Eating fresh fruits and vegetables provides essential nutrients that are beneficial for overall health and well-being. Here are some key benefits:</p>
        <ul>
          <li><strong>High in Nutrients:</strong> Fresh produce is rich in vitamins, minerals, and antioxidants that are vital for various bodily functions.</li>
          <li><strong>Supports Heart Health:</strong> Many fruits and vegetables contain nutrients like potassium and fiber that help in lowering blood pressure and reducing the risk of heart diseases.</li>
          <li><strong>Boosts Immunity:</strong> The vitamins and antioxidants found in fresh produce strengthen the immune system, protecting the body from infections and diseases.</li>
          <li><strong>Aids Digestion:</strong> The dietary fiber present in fruits and vegetables promotes digestive health by preventing constipation and supporting regular bowel movements.</li>
          <li><strong>Provides Energy:</strong> Carbohydrates from fruits like bananas and mangoes provide a natural source of energy, keeping you active throughout the day.</li>
        </ul>
        <p>When selecting fresh fruits and vegetables, look for vibrant colors, firm textures, and avoid any signs of spoilage. Incorporating a variety of produce into your diet ensures you receive a wide range of nutrients for optimal health.</p>
      </div>
    </div>
  );
};

export default LandingPage;
