import React from 'react';
import { Container, Input, Typo, ContainerButton } from '../../atoms';
import { Button, Element } from '../../molecules';
import { List } from '../../organisms';
import colors from '../../../utils/Colors';

const Library = ({
  refreshDeckList,
  decksLoading,
  inputValue,
  createDeck,
  setInputValue,
  dropdownData,
  dropdownValue,
  isFocus,
  setDropdownValue,
  setIsFocus,
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
        <Typo.SubTitle fontSize={'20px'}>Créez votre deck</Typo.SubTitle>
        <Input.TextInput
          onChangeText={(e) => setInputValue(e)}
          value={inputValue}
          placeholder='Saisissez votre titre'
        />
        <Input.Dropdown
          setDropDownvalue={(value) => setDropdownValue(value)}
          dropdownData={dropdownData}
          dropdownValue={dropdownValue}
        />
        <ContainerButton.ClassicButton
          onPress={() => createDeck()}
          backgroundColor={colors.lightPurple}
        >
          <Typo.Paragraph color={colors.white} fontSize={'18px'} fontFamily={'Poppins-Bold'}>
            Créer
          </Typo.Paragraph>
        </ContainerButton.ClassicButton>
      </Element.Modal>
      <List.DeckList
        setIsFocus={(value) => setIsFocus(value)}
        onPressEditable={(id) => onPressEditable(id)}
        onPressDeck={(id) => onPressDeck(id)}
        onRefresh={() => refreshDeckList()}
        isRefreshing={decksLoading}
        data={decks}
      />
      <Button.CircleIconButton onPress={() => onPressButton(true)} />
    </Container.ScreenBase>
  );
};

export default Library;
