import './Header.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react'

type CartItem = {
  "productId": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  "quantity": 2,
  "deliveryOptionId": "1"
}

export function Header () {
   const [cart, setCart] = useState<CartItem[]>([]);

  
    useEffect(() => {
      axios.get('http://localhost:3000/api/cart-items')
        .then((response) => {
          setCart(response.data)
        })
    }, []
    )

  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  })

  return (
     <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <img className="logo"
            src="images/logo-white.png" />
          <img className="mobile-logo"
            src="images/mobile-logo-white.png" />
        </Link>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <Link className="orders-link header-link" to="/orders">

          <span className="orders-text">Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">{cartQuantity}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  )
}