import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

import React, { useState } from 'react';
import { Badge, Col } from 'antd';
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall,
} from './style';

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WrapperTextHeader>TIKI</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch size="medium" textButton="Tìm kiếm" placeholder="Input search text" />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px' }} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <Badge count={4} size='small'>
              <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
