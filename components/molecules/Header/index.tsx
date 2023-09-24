import { Dosis } from 'next/font/google';
import React from 'react';

import { LogoBox, LogoText, Wrap } from './style/index.style';

const dosis = Dosis({
  subsets: ['latin'],
  variable: '--dosis-font',
});

const Header = () => {
  return (
    <Wrap>
      <LogoBox>
        <LogoText className={dosis.variable}>T</LogoText>
      </LogoBox>
      {/* <Search /> */}
    </Wrap>
  );
};

export default Header;
