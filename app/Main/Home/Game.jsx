import React, { useState } from 'react';
import { MemoryCard } from '../../../components/molecules/Element';
import { useGetRandomCardByDeckIdQuery } from '../../../services/card';
import { Container, ContainerButton, Typo } from '../../../components/atoms';
import colors from '../../../utils/Colors';

const Game = ({ navigation, route }) => {
  const { data, error, isLoading } = useGetRandomCardByDeckIdQuery({ deckId: route.params.id });

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
        {currentIndex < data?.length ? `Carte ${currentIndex + 1} sur ${data?.length}` : ''}
      </Typo.SubTitle>

      {data && Array.isArray(data) && currentIndex < data.length ? (
        <MemoryCard
          key={data[currentIndex].id}
          card={data[currentIndex]}
          onSwipeComplete={handleSwipeComplete}
        />
      ) : (
        <Typo.Paragraph>Paquet terminé !</Typo.Paragraph>
      )}
      <ContainerButton.ClassicButton
        onPress={handleFinishSession}
        absoluteBottom
        backgroundColor={({ theme }) => theme.lightPurple}
      >
        <Typo.SubTitle color={({ theme }) => theme.white}>Finir la scéance</Typo.SubTitle>
      </ContainerButton.ClassicButton>
    </Container.ScreenBase>
  );
};

export default Game;
