
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';

const SHIPPING = 5.99;
const TAX_RATE = 0.08;

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce((t, i) => t + i.price * i.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + SHIPPING;

  if (!cartItems.length) return <h2>Your cart is empty</h2>;

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <strong>{item.name}</strong> - ${item.price}
          <button onClick={() => dispatch(updateQuantity({id:item.id, quantity:item.quantity-1}))}>-</button>
          {item.quantity}
          <button onClick={() => dispatch(updateQuantity({id:item.id, quantity:item.quantity+1}))}>+</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <hr />
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p>Shipping: ${SHIPPING}</p>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
