import React from 'react';
import '../styles/Menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <img src="../../public/APD__Logo.svg" alt="A Planter's Daughter Logo" />
        <button>CLOSE [X]</button>
      </div>

      <div className="menu__grid__container">
        <div className="menu__left__container">
          <div className="menu__left">
            <h2>Get In Touch</h2>
            <ul className="menu__left__list">
              <li>↳ info@aplantersdaughter.com</li>
              <li>↳ write to us</li>
            </ul>
          </div>

          <div className="menu-footer">
            <p>[D.1] PRIVACY POLICY</p>
            <p>[D.2] TERMS</p>
          </div>
        </div>

        <div className="menu__right__container">
          <div className="menu-grid">
            <div>
              <h2>Shop</h2>
              <ul>
                <li>[1.1] ALL</li>
                <li>[1.2] BY FUNCTION</li>
                <li>[1.3] BY MOOD</li>
                <li>[1.4] BY BESTSELLERS</li>
                <li>[1.5] BUNDLES/GIFT</li>
                <li>[1.6] SUBSCRIPTIONS</li>
              </ul>
            </div>

            <div>
              <h2>Estate</h2>
              <ul>
                <li>[2.1] OUR GARDENS</li>
                <li>[2.2] OUR SEASONS</li>
                <li>[2.3] OUR TECHNIQUES</li>
                <li>[2.4] OUR PROCESS</li>
                <li>[2.5] OUR IMPACT</li>
              </ul>
            </div>
            <div>
              <h2>Culture</h2>
              <ul>
                <li>[3.1] OUR HISTORY</li>
                <li>[3.2] FOUNDING STORY</li>
                <li>[3.3] COMMUNITY & CELEBRATION</li>
                <li>[3.4] SPIRITUALITY & WELLNESS</li>
                <li>[3.5] PHILANTHROPY</li>
              </ul>
            </div>
          </div>

          <div className="menu-grid">
            <div>
              <h2>Journal</h2>
              <ul>
                <li>[4.1] APOTHECARY</li>
                <li>[4.2] BREWING GUIDES</li>
                <li>[4.3] IN THE PRESS</li>
              </ul>
            </div>

            <div>
              <h2>Info</h2>
              <ul>
                <li>[5.1] SPECIALTY COFFEE</li>
                <li>[5.2] FAQS</li>
                <li>[5.3] WHOLESALE</li>
                <li>[5.4] SHIPPING & RETURNS</li>
              </ul>
            </div>

            <div>
              <h2>Find Us</h2>
              <ul>
                <li>INSTAGRAM</li>
                <li>FACEBOOK</li>
                <li>STOCKISTS NEAR YOU</li>
              </ul>
            </div>
          </div>

          <div className="product-card">
            <img
              src="../../public/product__card.png"
              alt="Coffee"
              className="product-image"
            />
            <div className="product-info">
              <h3>
                ▲ ONWARDS & UPWARDS <span className="price">€ 9.99</span>
              </h3>
              <p>
                100% Medium roast Coffee Arabica with organic Chaga and Lion's
                Mane mushrooms.
              </p>
              <a href="#" className="shop-link">
                ↳ Shop Coffee
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
