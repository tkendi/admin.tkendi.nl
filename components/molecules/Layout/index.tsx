import React from 'react';

import Header from '../Header';

import { LayoutStyled } from './style/index.style';

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
