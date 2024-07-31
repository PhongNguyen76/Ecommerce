import React from 'react';

import TypeProduct from '@component/TypeProduct/TypeProduct';
import { WrapperTypeProduct, WrapperButtonMore } from './style.js';
import slider1 from '@assets/images/slider1.webp';
import slider3 from '@assets/images/slider3.jpg';

import SilderComponent from '@component/SliderComponent/SilderComponent';
import CardComponent from '@component/CardComponent/CardComponent';
import NavBarComponent from '../../component/NavBarComponent/NavBarComponent.jsx';
import ButtonComponent from '../../component/ButtonComponent/ButtonComponent.jsx';

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
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>

        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}
        >
          <WrapperButtonMore
            textButton="Xem Them"
            styleButton={{
              border: '1px solid rgb(11,116,229)',
              color: 'rgb(11,116,229)',
              width: '240px',
              height: '38x',
              borderRadius: '4px',
            }}
            styleTextButton={{ fontWeight: 500 }}
          />
        </div>
        {/* type="outline" */}

        {/* <NavBarComponent /> */}
      </div>
    </>
  );
};

export default HomePage;
