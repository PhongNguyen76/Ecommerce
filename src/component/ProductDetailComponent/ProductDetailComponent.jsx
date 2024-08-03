import React from 'react';

import {
  WrapperStyleImageSmall,
  WrapperStyleColImage,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperAddressProduct,
  WrapperQualityProduct,
  WrapperInputNumber,
} from './style.js';
import { Row, Col, Image, InputNumber } from 'antd';
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import imageProduct from '@assets/images/Imagesbig.webp';
import imageProductSmall from '@assets/images/ImageSmall.webp';
import imageProductSmall2 from '@assets/images/ImageSmall2.webp';
import imageProductSmall3 from '@assets/images/ImageSmall3.webp';
import imageProductSmall4 from '@assets/images/ImageSmall4.webp';
import imageProductSmall5 from '@assets/images/ImageSmall5.webp';
import imageProductSmall6 from '@assets/images/ImageSmall6.webp';
import ButtonMore from '../ButtonComponent/ButtonMore.jsx';
import ButtonComponent from '../ButtonComponent/ButtonComponent.jsx';

const ProductDetailComponent = () => {
  const onChange = () => {};
  return (
    <div>
      <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px' }}>
        <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px' }}>
          <Image src={imageProduct} alt="image product" preview={false} />
          <div>
            <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
              <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
              </WrapperStyleColImage>
              <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall
                  src={imageProductSmall2}
                  alt="image small2"
                  preview={false}
                />
              </WrapperStyleColImage>
              <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall
                  src={imageProductSmall3}
                  alt="image small3"
                  preview={false}
                />
              </WrapperStyleColImage>
              <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall
                  src={imageProductSmall4}
                  alt="image small4"
                  preview={false}
                />
              </WrapperStyleColImage>

              <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall
                  src={imageProductSmall5}
                  alt="image small5"
                  preview={false}
                />
              </WrapperStyleColImage>
              <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall
                  src={imageProductSmall6}
                  alt="image small6"
                  preview={false}
                />
              </WrapperStyleColImage>
            </Row>
          </div>
        </Col>
        <Col span={14} style={{ padding: '10px' }}>
          <WrapperStyleNameProduct>
            Nồi áp suất điện tử Lock&Lock EJP666SLV 6 Lít - Hàng chính hãng
          </WrapperStyleNameProduct>
          <div>
            <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
            <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
            <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
            <WrapperStyleTextSell>|Đã bán 1000+ </WrapperStyleTextSell>
          </div>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>1.000.000đ</WrapperPriceTextProduct>
          </WrapperPriceProduct>
          <WrapperAddressProduct>
            <span>Giao đến: </span>
            <span className="address">Đường Huỳnh Lắm ,P.Hòa Hải.Q.Ngũ Hành Sơn,TP.Đà Nẵng </span>
            <span className="change-address">-Đổi địa chỉ</span>
          </WrapperAddressProduct>
          <div
            style={{
              margin: '10px 0 20px',
              padding: '10px 0',
              borderTop: '1px solid #e5e5e5',
              borderBottom: '1px solid #e5e5e5',
            }}
          >
            <div style={{ marginBottom: '10px' }}>Số Lượng</div>
            <WrapperQualityProduct>
              <button style={{ border: 'none', background: 'transparent' }}>
                {<PlusOutlined style={{ color: '#000', fontSize: '20px' }} />}
              </button>
              <WrapperInputNumber size="small" defaultValue={3} onChange={onChange} />
              <button>
                <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
              </button>
            </WrapperQualityProduct>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <ButtonComponent
              size={20}
              styleButton={{
                background: ' rgb(255, 57, 69) ',
                height: '48px',
                width: '220px',
                border: 'none',
                borderRadius: '4px',
              }}
              textButton={'Chọn Mua'}
              styleTextButton={{ color: '#fff', fontWeight: '700' }}
            ></ButtonComponent>
            <ButtonComponent
              size={20}
              styleButton={{
                background: ' #fff ',
                height: '48px',
                width: '220px',
                border: '1px solid rgb(13, 92, 182)',
                borderRadius: '4px',
              }}
              textButton={'Mua trả sau'}
              styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px' }}
            ></ButtonComponent>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailComponent;
