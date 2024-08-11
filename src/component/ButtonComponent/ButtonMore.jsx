import React from 'react';
import { WrapperButtonMore } from '@pages/HomePage/style.js';

const ButtonMore = ({}) => {
  return (
    <WrapperButtonMore
      textButton="Xem thêm"
      styleButton={{
        border: '1px solid rgb(11,116,229)',
        color: 'rgb(11,116,229)',
        width: '240px',
        height: '38x',
        borderRadius: '4px',
      }}
      styleTextButton={{ fontWeight: 500 }}
    />
  );
};

export default ButtonMore;
