import React from 'react';
import styled from 'styled-components/native';
import { Typo, Image, Container } from '../../atoms';
import colors from '../../../utils/Colors';

// Dictionnaire qui mappe categoryId à un chemin d'image
const categoryImages = {
  1: require('../../../assets/images/1.png'),
  2: require('../../../assets/images/2.png'),
  3: require('../../../assets/images/3.png'),
  4: require('../../../assets/images/4.png'),
  5: require('../../../assets/images/5.png'),
  6: require('../../../assets/images/6.png'),
  7: require('../../../assets/images/7.png'),
  8: require('../../../assets/images/8.png'),
  9: require('../../../assets/images/9.png'),
  10: require('../../../assets/images/10.png'),
  11: require('../../../assets/images/11.png'),
  12: require('../../../assets/images/12.png'),
  13: require('../../../assets/images/13.png'),
};

const StyledExplorer = styled.TouchableOpacity`
  width: 48%;
  border-radius: 16px;
  padding: 10px;
  background-color: ${colors.white};
  margin-bottom: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Explorer = ({ title, description, price, onPress, categoryId, ...props }) => {
  const categoryImage = categoryImages[categoryId];

  return (
    <StyledExplorer onPress={onPress} {...props}>
      <Image.ImageExplorer source={categoryImage} />
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
