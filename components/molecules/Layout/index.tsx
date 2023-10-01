"use client"

import React, { Suspense, useEffect, useState } from 'react';

import Header from '../Header';

import { LayoutStyled } from './style/index.style';

const Layout = ({
  children,
  isHeaderShow = true,
}: React.PropsWithChildren<LayoutProps>) => {
  const [isSSR, setIsSSR] = useState(false)

  useEffect(() => {
    setIsSSR(true)
  }, [])

  return (
    <Suspense fallback={!isSSR && <p>loading...</p>}>
      <LayoutStyled>
        {isHeaderShow && <Header />}
        {children}
      </LayoutStyled>
    </Suspense>
  );
};

export default Layout;
