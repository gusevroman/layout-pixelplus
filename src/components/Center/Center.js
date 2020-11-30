
import React from 'react';

import Orders from '../Orders/Orders';
import Cards from '../Cards/Cards';
import About from '../About/About';

import './Center.scss';


function Center() {

  return (
    <div>
      <Orders />
      <Cards />
      <About />
    </div>
  );
}


export default Center;
