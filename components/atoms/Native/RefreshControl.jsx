import React from 'react';
import styled from 'styled-components/native';

const StyledRefreshControl = styled.RefreshControl``;

const RefreshControl = ({ ...props }) => {
  return <StyledRefreshControl {...props} />;
};

export default RefreshControl;
