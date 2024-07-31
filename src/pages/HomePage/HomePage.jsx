import React from 'react';

import TypeProduct from '@component/TypeProduct/TypeProduct';
import { WrapperTypeProduct } from './style.js';
import slider1 from '@assets/images/slider1.webp';
import slider3 from '@assets/images/slider3.jpg';

import SilderComponent from '@component/SliderComponent/SilderComponent';
import CardComponent from '@component/CardComponent/CardComponent';
import NavBarComponent from '../../component/NavBarComponent/NavBarComponent.jsx';

const HomePage = () => {
  const arr = ['TV', 'Tu lanh', 'Lap top'];

  return (
    <>
      <div style={{ padding: '0 120px' }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        id="container"
        style={{ backgroundColor: '#efefef', padding: '0 120px', height: '1000px' }}
      >
        <SilderComponent arrImages={[slider1, slider3]} />
        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '2000px' }}>
          <CardComponent />
        </div>
        <NavBarComponent />
      </div>
    </>
  );
};

export default HomePage;
