import React from 'react';
import { StyledScreenBase } from '../../nanites';

const ScreenBase = ({ centered, ...props }) => {
  return <StyledScreenBase centered={centered} {...props}></StyledScreenBase>;
};

export default ScreenBase;
