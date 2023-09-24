import React from 'react';

import { LayoutStyled } from './style/index.style';
import Header from '../Header';

const Layout = ({
  children,
  isHeaderShow = true,
}: React.PropsWithChildren<LayoutProps>) => {
  return (
    <LayoutStyled>
      {isHeaderShow && <Header />}
      {children}
    </LayoutStyled>
  );
};

export default Layout;
