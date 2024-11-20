import './Menu.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Menu = ({ onAddToCart }) => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const showCategories = location.state?.showCategories;

  const handleAddToCart = () => {
    onAddToCart();
  };

  const categories = [
    "Running",
    "Basketball",
    "Lifestyle",
    "Training"
  ];

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="menu-container">
      <h1>Our Collection</h1>
      
      {showCategories && (
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="product-badge">{product.badge}</div>
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-price">
              <span className="price">${product.price}</span>
              <button className="add-to-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    description: "Premium cushioning for ultimate comfort",
    price: 149.99,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-shoes-2V5C4p.png",
    badge: "Bestseller",
    category: "Running"
  },
  {
    id: 2,
    name: "Nike Air Jordan 1",
    description: "Classic basketball heritage design",
    price: 169.99,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/air-jordan-1-high-og-shoes-PLe6bx.png",
    badge: "Limited Edition",
    category: "Basketball"
  },
  {
    id: 3,
    name: "Nike Air Force 1",
    description: "Timeless street style icon",
    price: 109.99,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png",
    badge: "Classic",
    category: "Lifestyle"
  },
  {
    id: 4,
    name: "Nike Free Run 5.0",
    description: "Lightweight and flexible running shoe",
    price: 119.99,
    image: "/images/Nike-Free-Run-5.0.png",
    badge: "Popular",
    category: "Running"
  }
];

export default Menu; 