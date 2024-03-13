import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>ABOUT US</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Our Mission'
              label='mission'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Our Story'
              label='story'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;