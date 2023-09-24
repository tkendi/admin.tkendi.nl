import type { GetServerSideProps } from 'next';
import { NextPage } from 'next';
import React from 'react';

import Layout from '@/components/molecules/Layout';
import HomeTemplate from '@/components/templates/Home';

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeTemplate />
    </Layout>
  );
};

export default Home;
