import React from 'react';
import InputForm from '@component/InputForm/InputForm.jsx';
import ButtonComponent from '@component/ButtonComponent/ButtonComponent.jsx';
import imageLogin from '@assets/images/Image-login.png';
import { Image, Divider } from 'antd';
import { useState } from 'react';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style';
const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ccc',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.53)',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '800px',
          height: '445px',
          borderRadius: '6px',
          background: '#fff',
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập vào tài khoản</p>
          <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" />
          <div style={{ position: 'relative' }}>
            <span style={{ zIndex: 10, position: 'absolute', top: '35%', right: '8px' }}>
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>

            <InputForm placeholder="password" type={isShowPassword ? 'text' : 'p'} />
          </div>
          <ButtonComponent
            size={40}
            styleButton={{
              background: ' rgb(255, 57, 69) ',
              height: '48px',
              width: '100%',
              border: 'none',
              borderRadius: '4px',
              borderRadius: '4px',
              margin: '26px 0 10px',
            }}
            textButton={'Đăng nhập'}
            styleTextButton={{ color: '#fff', fontWeight: '700' }}
          ></ButtonComponent>
          <p>
            <WrapperTextLight>Quên mật khẩu</WrapperTextLight>
          </p>
          <p>
            Chưa có tài khoản <WrapperTextLight>Tạo tài Khoản </WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogin} preview={false} alt="imagelogin" height="203px" width="203px" />
          <h4>Mua Sắm Tại TIKI</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignInPage;
