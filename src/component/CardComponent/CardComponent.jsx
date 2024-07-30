import React from 'react';
import {
  StyledNameProduct,
  WrapperReportText,
  WrapperPriceText,
  WrapperPriceDiscountText,
  WrapperCardStyle
} from './style';
import { StarFilled } from '@ant-design/icons'; 
import official from  '@assets/images/official.png'

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      styles={{
        body: { padding: '10px' },
      }}
    >
      <img src={official} style={{width:'68px', height:'14px', position:'absolute', top:'0', left:'0'}}/>
      <StyledNameProduct>Iphone</StyledNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: '4px' }}>
          <span>4.96</span> <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
        </span>
        <span>|Đã bán 1000+ </span>
      </WrapperReportText>
      <WrapperPriceText>
        1.000.000
        <WrapperPriceDiscountText>-5% discount</WrapperPriceDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
