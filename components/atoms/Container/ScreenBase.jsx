import React from 'react';
import { StyledScreenBase } from '../../nanites';
import { useHeaderHeight } from '@react-navigation/elements';

const ScreenBase = ({ centered, ...props }) => {
  const top = useHeaderHeight();
  return <StyledScreenBase safePaddingTop={top} centered={centered} {...props}></StyledScreenBase>;
};

export default ScreenBase;
