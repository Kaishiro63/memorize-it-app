import React from 'react';
import { Container, Image, Input, Typo, ContainerButton } from '../../atoms';
import { Button, Element } from '../../molecules';
import { List } from '../../organisms';
import colors from '../../../utils/Colors';

const Library = ({
  dropdownData,
  isFocus,
  value,
  onPressEditable,
  onPressDeck,
  onRefresh,
  isRefreshing,
  onPressButton,
  decks,
  modalVisible,
  onBackDropPress,
  ...props
}) => {
  return (
    <Container.ScreenBase isNotPadding centered {...props}>
      <Element.Modal onBackDropPress={onBackDropPress} modalVisible={modalVisible}>
        <Image.Icon
          onPress={onBackDropPress}
          name='close'
          size={24}
          color={colors.lightPurple}
          iconFamily={'MaterialIcons'}
          containerStyle={`
          position: absolute;
          top: 8px;
          right: 8px;
      `}
        />
        <Typo.SubTitle fontSize={'20px'}>Créez votre deck</Typo.SubTitle>
        <Input.TextInput placeholder='Saisissez votre titre' />
        <Input.Dropdown dropdownData={dropdownData} isFocus={isFocus} value={value} />

        <ContainerButton.ClassicButton backgroundColor={colors.lightPurple}>
          <Typo.Paragraph color={colors.white} fontSize={'18px'} fontFamily={'Poppins-Bold'}>
            Créer
          </Typo.Paragraph>
        </ContainerButton.ClassicButton>
      </Element.Modal>
      <List.DeckList
        onPressEditable={(id) => onPressEditable(id)}
        onPressDeck={(id) => onPressDeck(id)}
        onRefresh={onRefresh}
        isRefreshing={isRefreshing}
        data={decks}
      />
      <Button.CircleIconButton onPress={() => onPressButton(true)} />
    </Container.ScreenBase>
  );
};

export default Library;
