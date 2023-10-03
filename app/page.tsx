"use client"

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import Layout from '@/components/organisms/Layout';

const Home: NextPage = () => {
  const { push } = useRouter()
  const redirectURL = () => {
    push("/web")
  }

  useEffect(() => {
    redirectURL()
  }, [])

  return (
    <Layout />
  );
};

export default Home;