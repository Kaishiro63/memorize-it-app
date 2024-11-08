import React, { useState } from 'react';
import { MemoryCard } from '../../../components/molecules/Element';
import { useGetAllCardByDeckIdQuery } from '../../../services/card';
import { Container, ContainerButton, Typo } from '../../../components/atoms';
import colors from '../../../utils/Colors';

const Game = ({ navigation, route }) => {
  const { data, error, isLoading } = useGetAllCardByDeckIdQuery({ deckId: route.params.id });

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeComplete = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleFinishSession = () => {
    navigation.navigate('Home');
  };

  return (
    <Container.ScreenBase centered>
      <Typo.SubTitle>
        {currentIndex < data?.cards.length
          ? `Carte ${currentIndex + 1} sur ${data?.cards.length}`
          : ''}
      </Typo.SubTitle>

      {data && Array.isArray(data.cards) && currentIndex < data.cards.length ? (
        <MemoryCard
          key={data.cards[currentIndex].id}
          card={data.cards[currentIndex]}
          onSwipeComplete={handleSwipeComplete}
        />
      ) : (
        <Typo.Paragraph>Paquet terminé !</Typo.Paragraph>
      )}
      <ContainerButton.ClassicButton
        onPress={handleFinishSession}
        absoluteBottom
        backgroundColor={colors.lightPurple}
      >
        <Typo.SubTitle color={colors.white}>Finir la scéance</Typo.SubTitle>
      </ContainerButton.ClassicButton>
    </Container.ScreenBase>
  );
};

export default Game;
