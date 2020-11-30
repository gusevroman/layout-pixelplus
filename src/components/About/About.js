
import React from 'react';

import './About.scss';


function About() {

  return (
    <div className='about'>
      <div className='about__item-container'>
        <p className='about__item'>
          Студия «Пиксель Плюс» разработает полнофункциональный продукт ориентированный
          на целевую аудиторию и эффективно решающий поставленные перед ним маркетинговые задачи.
          Опыт работ и использование собственных технологий,
          позволяет предлагать услугу изготовления сайта в Москве в разумные сроки.
      </p>
      </div>
      <div className='about__item-container'>
        <p className='about__item'>
          Поисковое продвижение (раскрутка) ведется по коммерческим запросам, что позволяет многократно
          увеличить количество продаж с сайта при разумном рекламном бюджете.
      </p>
      </div>
    </div>
  );
}


export default About;