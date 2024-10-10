import React from 'react';
import { StyledScreenBase } from '../../nanites';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScreenBase = ({ centered, ...props }) => {
  const { top } = useSafeAreaInsets();
  return <StyledScreenBase paddingInsets={top} centered={centered} {...props}></StyledScreenBase>;
};

export default ScreenBase;
