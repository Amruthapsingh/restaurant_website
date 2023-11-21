import React, { useState } from 'react';
import './App.css';

const menuOptions = {
  breakfast: [
    { name: 'Rava Idli', image: require('./images/rava_idli.jpeg') },
    { name: 'Masala Dosa', image: require('./images/masala_dosa.jpg') },
    { name: 'Akki Roti', image: require('./images/akki_roti.jpg') },
    { name: 'Idli', image: require('./images/idli.jpg') },
    { name: 'Pongal', image: require('./images/pongal.jpg') },
  ],
  lunch: [
    { name: 'Bisibele Bath', image: require('./images/bisibele_bath.jpg') },
    { name: 'Chow Chow Bath', image: require('./images/chow.jpg') },
    { name: 'Neer Dosa with Chicken Curry', image: require('./images/neer.jpeg') },
  ],
  dinner: [
    { name: 'Chicken Curry', image: require("./images/curry.jpeg")},
    { name: 'Dal Makhani', image: require('./images/daal.jpeg') },
    { name: 'Aloo Gobi', image: require('./images/aloo.jpeg') },
  ],
  beverages: [
    { name: 'Masala Chai', image: require("./images/tea.jpg")},
    { name: 'Filter Coffee', image: require("./images/coffee.jpg")},
    { name: 'Fresh Fruit Juice', image: require("./images/fruit.jpg")},
  ],
};

function App() {
  const [activeMenu, setActiveMenu] = useState('breakfast');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="App">
      <header>
        <h1>My kitchen</h1>
        <nav>
          <ul>
            <li onClick={() => handleMenuClick('breakfast')}>
              <a href="/#">Breakfast</a>
            </li>
            <li onClick={() => handleMenuClick('lunch')}>
              <a href="/#">Lunch</a>
            </li>
            <li onClick={() => handleMenuClick('dinner')}>
              <a href="/#">Dinner</a>
            </li>
            <li onClick={() => handleMenuClick('beverages')}>
              <a href="/#">Beverages</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="menu">
          <h2>
            {activeMenu === 'breakfast'
              ? 'Breakfast Menu'
              : activeMenu === 'lunch'
              ? 'Lunch Menu'
              : activeMenu === 'dinner'
              ? 'Dinner Menu'
              : 'Beverages Menu'}
          </h2>
          <p>
            {activeMenu === 'breakfast'
              ? 'Start your day with these delicious options:'
              : activeMenu === 'lunch'
              ? 'Enjoy our Karnataka-style lunch offerings:'
              : activeMenu === 'dinner'
              ? 'End your day with these Karnataka-inspired choices:'
              : 'Quench your thirst with these refreshing beverages:'}
          </p>
          <div className="menu-container">
            {menuOptions[activeMenu].map((option, index) => (
              <div key={index} className="menu-card">
                <img src = {option.image} alt={option.name} />
                <p>{option.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Kitchen. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;