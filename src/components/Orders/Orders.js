import React from 'react';

import './Orders.scss';


function Orders() {

  return (
    <div className='orders orders__center'>
      <h1 className='orders__title'>
        PSD файл с макетом. Макет разбит по слоям и сгрупированн по папкам:
      </h1>
      <ul className='orders__orders'>
        <li className='orders__items' ><span className='orders__items orders__items_accent'>number</span> - нумерация блоков (номера блоков верстать не нужно)</li>
        <li className='orders__items' ><span className='orders__items orders__items_accent'>text</span> - текстовые блоки (шрифт Arial, размер 14 пикселей, межстрочное растояние 22 пикселя)</li>
        <li className='orders__items' ><span className='orders__items orders__items_accent'>head</span> - шапка сайта</li>
        <li className='orders__items' ><span className='orders__items orders__items_accent'>content</span> - контентная область, которая в свою очередь делится на <span className='orders__items orders__items_accent' >left</span>  и <span className='orders__items orders__items_accent'>center</span> </li>
      </ul>
      <p className='orders__post'>Текстовое описание задания и требования.</p>
    </div>
  );
};


export default Orders;
