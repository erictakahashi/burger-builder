import React from 'react';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
        <Checkout />
      </Layout>
    </div>
  );
}

export default App;
