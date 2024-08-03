import React from 'react';

import TypeProduct from '@component/TypeProduct/TypeProduct';
import { WrapperTypeProduct, WrapperProducts } from './style.js';
import slider1 from '@assets/images/slider1.webp';
import slider3 from '@assets/images/slider3.jpg';

import SilderComponent from '@component/SliderComponent/SilderComponent';
import CardComponent from '@component/CardComponent/CardComponent';
import NavBarComponent from '../../component/NavBarComponent/NavBarComponent.jsx';
import ButtonComponent from '../../component/ButtonComponent/ButtonComponent.jsx';
import ButtonMore from '@component/ButtonComponent/ButtonMore';

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
        <WrapperProducts>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProducts>

        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}
        >
          <ButtonMore/>
        </div>
        {/* type="outline" */}

        {/* <NavBarComponent /> */}
      </div>
    </>
  );
};

export default HomePage;
