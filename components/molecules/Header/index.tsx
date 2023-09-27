import { Dosis } from 'next/font/google';
import React from 'react';

import { LogoBox, LogoText, Wrap } from './style/index.style';

const Header = () => {
  return (
    <Wrap>
      <LogoBox>
        <LogoText>홈</LogoText>
      </LogoBox>
    </Wrap>
  );
};

export default Header;
