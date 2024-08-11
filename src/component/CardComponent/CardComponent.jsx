import React from 'react';
import {
  StyledNameProduct,
  WrapperReportText,
  WrapperPriceText,
  WrapperPriceDiscountText,
  WrapperCardStyle,
  WrapperStyleTextSell,
} from './style';
import { StarFilled } from '@ant-design/icons';
import official from '@assets/images/official.png';

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      styles={{
        body: { padding: '10px' },
      }}
    >
      <img
        src={official}
        style={{ width: '68px', height: '14px', position: 'absolute', top: '0', left: '0' }}
      />
      <StyledNameProduct>Iphone</StyledNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: '4px' }}>
          <span>4.96</span> <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54' }} />
        </span>
        <WrapperStyleTextSell>|Đã bán 1000+ </WrapperStyleTextSell>
      </WrapperReportText>
      <WrapperPriceText>
        <span style={{ marginRight: '8px' }}>1.000.000</span>
        <WrapperPriceDiscountText>-5% discount</WrapperPriceDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
