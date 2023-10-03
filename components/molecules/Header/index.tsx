import { Dosis } from 'next/font/google';
import React from 'react';

import { LogoBox, LogoSymbolText, LogoText, Wrap } from './style/index.style';

const Header = () => {
  return (
    <Wrap>
      <LogoBox>
        <LogoText>설탭 어드민</LogoText>
        <LogoSymbolText>Demo</LogoSymbolText>
      </LogoBox>
    </Wrap>
  );
};

export default Header;
