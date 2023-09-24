import React from 'react';
import { VscLoading } from 'react-icons/vsc';

import { theme } from '@/styles/stitches.config';

import { Wrap } from './styles/index.style';

const Loading = () => {
  const { Info600 } = theme['colors'];
  return (
    <Wrap>
      <VscLoading size="24px" color={Info600['value']} />
    </Wrap>
  );
};

export default Loading;
