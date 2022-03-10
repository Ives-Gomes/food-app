import React from 'react';

import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <Cart />

      <Header />

      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
