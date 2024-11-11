import React from 'react';
import './Menu.css';

function Menu() {
  const handleAddToCart = (item) => {
    alert(`${item} added to cart!`);
  };

  const handleBuyNow = (item) => {
    alert(`Proceeding to purchase: ${item}`);
  };

  return (
    <div className="menu-container">
      <h2 className="menu-title">Discover Our Delicious Menu</h2>
      <p className="menu-description">Indulge in a variety of healthy, flavorful dishes that nourish your body and soul.</p>

      <div className="menu-items">
        <div className="menu-item">
          <img src="/images/salad.jpg" alt="Fresh Salad" className="menu-image" />
          <h3 className="menu-item-title">Fresh Garden Salad</h3>
          <p className="menu-item-description">Crisp greens, seasonal veggies, and a light, zesty dressing.</p>
          <span className="menu-item-price">$9.99</span>
          <div className="menu-item-actions">
            <button className="btn-add" onClick={() => handleAddToCart('Fresh Garden Salad')}>Add to Cart</button>
            <button className="btn-buy" onClick={() => handleBuyNow('Fresh Garden Salad')}>Buy Now</button>
          </div>
        </div>

        <div className="menu-item">
          <img src="/images/smoothie.jpg" alt="Green Smoothie" className="menu-image" />
          <h3 className="menu-item-title">Green Smoothie</h3>
          <p className="menu-item-description">A refreshing blend of kale, spinach, and tropical fruits.</p>
          <span className="menu-item-price">$6.99</span>
          <div className="menu-item-actions">
            <button className="btn-add" onClick={() => handleAddToCart('Green Smoothie')}>Add to Cart</button>
            <button className="btn-buy" onClick={() => handleBuyNow('Green Smoothie')}>Buy Now</button>
          </div>
        </div>

        <div className="menu-item">
          <img src="/images/bowl.jpg" alt="Quinoa Power Bowl" className="menu-image" />
          <h3 className="menu-item-title">Quinoa Power Bowl</h3>
          <p className="menu-item-description">Protein-packed quinoa, fresh veggies, and a savory dressing.</p>
          <span className="menu-item-price">$12.49</span>
          <div className="menu-item-actions">
            <button className="btn-add" onClick={() => handleAddToCart('Quinoa Power Bowl')}>Add to Cart</button>
            <button className="btn-buy" onClick={() => handleBuyNow('Quinoa Power Bowl')}>Buy Now</button>
          </div>
        </div>

        <div className="menu-item">
          <img src="/images/acai.jpg" alt="Acai Bowl" className="menu-image" />
          <h3 className="menu-item-title">Acai Berry Bowl</h3>
          <p className="menu-item-description">A blend of acai berries, granola, and fresh fruits.</p>
          <span className="menu-item-price">$10.99</span>
          <div className="menu-item-actions">
            <button className="btn-add" onClick={() => handleAddToCart('Acai Berry Bowl')}>Add to Cart</button>
            <button className="btn-buy" onClick={() => handleBuyNow('Acai Berry Bowl')}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;


