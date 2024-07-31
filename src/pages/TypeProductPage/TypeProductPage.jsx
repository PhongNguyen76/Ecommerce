import React from 'react';
import { Row, Col } from 'antd';

import CardComponent from '../../component/CardComponent/CardComponent';
import NavBarComponent from '../../component/NavBarComponent/NavBarComponent';

const TypeProductPage = () => {
  return (
    <Row style={{ padding: '0 120px', background: '#efefef', flexWrap: 'nowrap',paddingTop:'10px' }}>
      <Col span={4} style={{ background: '#fff', marginRight: '10px', padding: '10px',borderRadius:'6px' }}>
        <NavBarComponent />
      </Col>
      <Col span={20}>
        <CardComponent />
      </Col>
    </Row>
  );
};

export default TypeProductPage;
