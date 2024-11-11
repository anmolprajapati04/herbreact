import React from 'react';
import './Home.css';
import freshHerbsImage from './images/fresh-herbs.jpg';
import healthyFoodImage from './images/healthy-food.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Herb Your Enthusiasm</h1>
          <p className="hero-subtitle">Nourish your body, delight your taste buds.</p>
          <Link to="/menu" className="cta-button">Explore the Menu</Link>
        </div>
        <img src={freshHerbsImage} alt="Fresh Herbs" className="hero-image" />
      </section>

      {/* About Us Section */}
      <section className="about">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At Herb Your Enthusiasm, we bring you the finest, freshest herbs and ingredients
            to create delightful, healthy dishes. We’re passionate about nourishing your body
            with wholesome, organic ingredients that make every meal a celebration of health.
          </p>
          <p>
            Our menu is designed to support your wellness goals while tantalizing your taste
            buds with vibrant flavors. Whether you're looking for plant-based dishes or hearty
            grain bowls, our food is crafted to fuel both body and soul.
          </p>
        </div>
        <div className="about-image-container">
          <img src={healthyFoodImage} alt="Healthy Food" className="about-image" />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h3>Discover the Goodness of Herb-Based Meals</h3>
          <p>
            Indulge in fresh, nutrient-packed meals that bring out the best of nature’s
            offerings. Our herbal dishes are designed to be both delicious and nourishing.
          </p>
          <Link to="/menu" className="cta-button">Explore the Menu</Link>
        </div>
      </section>

      {/* Testimonials or Featured Section (Optional) */}
      <section className="testimonials">
        <h3>What Our Customers Say</h3>
        <div className="testimonial-container">
          <div className="testimonial">
            <p>"The best healthy meals I've ever had! Every bite is full of flavor and vitality."</p>
            <span>- Emma, Health Enthusiast</span>
          </div>
          <div className="testimonial">
            <p>"I love the variety of dishes, and the herbs are so fresh! It’s always a treat."</p>
            <span>- Jack, Food Lover</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

