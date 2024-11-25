import React from 'react';
import styled from 'styled-components/native';
import { Typo, Image, Container } from '../../atoms';
import colors from '../../../utils/Colors';

const StyledExplorer = styled.TouchableOpacity`
  width: 48%;
  border-radius: 16px;
  padding: 10px;
  background-color: ${colors.white};
  margin-bottom: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Explorer = ({ image, title, description, price, onPress, ...props }) => {
  return (
    <StyledExplorer onPress={onPress} {...props}>
      <Image.ImageExplorer source={{ uri: image }} />

      <Container.Base containerStyle={{ padding: 10 }}>
        <Typo.SubTitle>{title}</Typo.SubTitle>
        <Typo.Paragraph numberOfLines={2}>{description}</Typo.Paragraph>

        <Container.Base
          containerStyle={{
            padding: 5,
            backgroundColor: colors.lightPurple,
            borderRadius: 8,
            alignSelf: 'flex-end',
          }}
        >
          <Typo.SubTitle textAlign={'right'} color={colors.white}>
            {price} €
          </Typo.SubTitle>
        </Container.Base>
      </Container.Base>
    </StyledExplorer>
  );
};

export default Explorer;
