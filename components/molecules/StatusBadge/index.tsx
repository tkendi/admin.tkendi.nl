import React from 'react';

import { Wrap } from './styles/index.style';

import { Text } from '@/components/atoms/Text';


const StatusBadge = ({ title, status }: StatusBadgeProps) => {
  return (
    <Wrap>
      <Text>{title}</Text>
      <Text>{status}</Text>
    </Wrap>
  );
};

export default StatusBadge;
