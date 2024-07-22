import React from 'react';
import './CartWidget.css';

interface CartWidgetProps {
  itemCount: number;
}

const CartWidget: React.FC<CartWidgetProps> = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-cart"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 1a1 1 0 0 1 1-1h1.293a1 1 0 0 1 .707.293l1.5 1.5a1 1 0 0 0 .707.293H14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4.5a1 1 0 0 1-.707-.293l-1.5-1.5A1 1 0 0 0 2 13H1a1 1 0 0 1-1-1V1zm3 4.5V13h9.5a.5.5 0 0 0 .5-.5V6H4v-.5z"
        />
      </svg>
      <span>{itemCount}</span>
    </div>
  );
};

export default CartWidget;
