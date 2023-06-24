import React, { useState } from "react";
import Footer from "../components/Footer";
import menuData from "../data/menuData";
import "./Menu.css";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(
    Object.keys(menuData)[0]
  );

  const handleClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <body>
      <div className='menu'>
        <h1 className='menu-header'>Menu</h1>

        <div className='menu-border'>
          {" "}
          {/* Wrap the elements in a div with the menu-border class */}
          <div className='menu-categories'>
            {Object.keys(menuData).map((category) => (
              <button
                key={category}
                className={`category-btn ${
                  category === activeCategory ? "active" : ""
                }`}
                onClick={() => handleClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className='menu-items'>
            {menuData[activeCategory].map((item, index) => (
              <div className='menu-item' key={index}>
                <div className='item-image'>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className='item-details'>
                  <h3>{item.name}</h3>
                  <p className='item-price'>${item.price.toFixed(2)}</p>
                  <p className='item-description'>{item.description}</p>
                  <div className='item-tags'>
                    {item.vegan && <span className='tag vegan'>Vegan</span>}
                    {item.glutenFree && (
                      <span className='tag gluten-free'>Gluten-Free</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
};

export default Menu;
