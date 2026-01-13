
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Provider store={store}>
      <CartPage />
    </Provider>
  );
}

export default App;
