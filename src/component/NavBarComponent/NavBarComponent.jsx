import React from 'react';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { Rate } from 'antd';
import { WrapperLabelText, WrapperTextValue, WrapperContent, WrapperTextPrice } from './style';
const NavBarComponent = () => {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case 'text':
        return options.map((option, index) => {
          return <WrapperTextValue key={index}>{option}</WrapperTextValue>;
        });
      case 'checkbox':
        return (
          <Checkbox.Group
            style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}
            onChange={onChange}
          >
            {options.map((option, index) => {
              return (
                <Checkbox key={index} value={options.value}>
                  {option.label}
                </Checkbox>
              );
            })}

            <Checkbox value="B">B</Checkbox>
          </Checkbox.Group>
        );

      case 'star':
        return options.map((option) => {
          return (
            <div style={{ display: 'flex' }}>
              <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
              <span>{`từ ${option} sao`}</span>
            </div>
          );
        });
      case 'price':
        return options.map((option) => {
          return <WrapperTextPrice>{option}</WrapperTextPrice>;
        });
      default:
        return {};
    }
  };
  return (
    <div>
      <WrapperLabelText>Label</WrapperLabelText>
      <WrapperContent>{renderContent('text', ['Tu lanh', 'TV', 'May Giat'])}</WrapperContent>

      <WrapperContent>
        {renderContent('checkbox', [
          { value: 'a', label: 'A' },
          { value: 'b', label: 'B' },
        ])}
      </WrapperContent>

      <WrapperContent>{renderContent('star', [3, 4, 5])}</WrapperContent>
      <WrapperContent>{renderContent('price', ['duoi 40', 'tren 50.000'])}</WrapperContent>
    </div>
  );
};

export default NavBarComponent;
