import React from 'react';

import { Text } from '@/components/atoms/Text';

import { Wrap } from './styles/index.style';

const StatusBadge = ({ title, status }: StatusBadgeProps) => {
  return (
    <Wrap>
      <Text>{title}</Text>
      <Text>{status}</Text>
    </Wrap>
  );
};

export default StatusBadge;
