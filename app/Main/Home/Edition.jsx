import React from 'react';
import { Container, Typo } from '../../../components/atoms';

const Edition = ({ navigation, route }) => {
  return (
    <Container.ScreenBase isNotPadding centered>
      <Typo.SubTitle>{route.params.id}</Typo.SubTitle>
    </Container.ScreenBase>
  );
};

export default Edition;
