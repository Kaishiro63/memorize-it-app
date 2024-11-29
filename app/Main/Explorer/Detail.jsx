import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useStripe } from '@stripe/stripe-react-native';
import { useCheckoutDeckMutation } from '../../../services/stripe';
import { useGetExplorerDecksIdQuery } from '../../../services/explorer';
import { Container, Typo, Image, ContainerButton } from '../../../components/atoms';
import colors from '../../../utils/Colors';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

const Detail = ({ route, navigation }) => {
  const {
    data: deck,
    error,
    isLoading,
  } = useGetExplorerDecksIdQuery({ deckId: route.params.deckId });
  const categoryImage = categoryImages[deck?.category.id];
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [checkoutDeck, { data, isSuccess }] = useCheckoutDeckMutation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      handleOpenPayement();
    }
  }, [isSuccess]);

  const handlePurchase = () => {
    checkoutDeck({
      deckId: deck.id,
    });
  };

  const handleOpenPayement = async () => {
    setLoading(true);

    try {
      const initResponse = await initPaymentSheet({
        paymentIntentClientSecret: data.paymentIntent,
        customerEphemeralKeySecret: data.ephemeralKey,
        customerId: data.customer,
      });

      if (initResponse.error) {
        console.error("Erreur lors de l'initialisation:", initResponse.error);
        setLoading(false);
        return;
      }

      const paymentResponse = await presentPaymentSheet();
      if (paymentResponse.error) {
        console.error('Erreur de paiement:', paymentResponse.error);
      } else {
        navigation.navigate('Home');
      }
    } catch (error) {
      console.error('Erreur lors du processus de paiement:', error);
    } finally {
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back' size={24} color={colors.primary} style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Container.ScreenBase>
      <Image.ImageExplorer source={categoryImage} />

      <Typo.Title fontSize={'24px'}>{deck?.name}</Typo.Title>
      <Typo.Paragraph fontSize={'14px'}>{deck?.description}</Typo.Paragraph>

      <Container.BaseRow padding={'12px 0'}>
        <Typo.Paragraph fontSize={'16px'}>Nombre de cartes : {deck?.cardCount}</Typo.Paragraph>

        <Typo.SubTitle color={({ theme }) => theme.darkPurple}>{deck?.price} €</Typo.SubTitle>
      </Container.BaseRow>

      <ContainerButton.ClassicButton
        backgroundColor={({ theme }) => (loading ? theme.black : theme.lightPurple)}
        onPress={handlePurchase}
        disabled={loading}
      >
        <Typo.SubTitle color={({ theme }) => theme.white}>
          {loading ? 'Traitement...' : 'Acheter'}
        </Typo.SubTitle>
      </ContainerButton.ClassicButton>
    </Container.ScreenBase>
  );
};

export default Detail;
