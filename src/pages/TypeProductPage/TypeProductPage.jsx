import React, { Fragment } from 'react';
import { Row, Col, Pagination, Button } from 'antd';

import CardComponent from '../../component/CardComponent/CardComponent';
import NavBarComponent from '../../component/NavBarComponent/NavBarComponent';
import { WrapperProducts, WrapperNavbar } from './style';

const TypeProductPage = () => {
  const onChange = () => {};
  return (
    <div style={{ width: '100%', background: '#efefef' }}>
      <div style={{ width: '1207px', margin: '0 auto' }}>
        <Row
          style={{
            flexWrap: 'nowrap',
            paddingTop: '10px',
          }}
        >
          <WrapperNavbar span={4}>
            <NavBarComponent />
          </WrapperNavbar>
          <Col span={20}>
            <WrapperProducts>
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </WrapperProducts>
            <Pagination
              showQuickJumper
              defaultCurrent={2}
              total={100}
              onChange={onChange}
              style={{ justifyContent: 'center', marginTop: '10px' }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TypeProductPage;
