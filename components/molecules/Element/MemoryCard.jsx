import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Container, Typo } from '../../atoms';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  runOnJS,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const StyledMemoryCard = styled(Animated.View)`
  width: 80%;
`;

const MemoryCard = ({ ...props }) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onSwipeComplete = () => {
    console.log('Swipe complet !');
  };

  const gesture = Gesture.Pan()
    .onChange((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onFinalize(() => {
      const shouldBeDismissed = Math.abs(translateX.value) > screenWidth * 0.4;

      if (shouldBeDismissed) {
        translateX.value = withSpring(
          translateX.value > 0 ? screenWidth + 100 : -screenWidth - 100,
          {},
          () => {
            runOnJS(onSwipeComplete)();
          }
        );
      } else {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    const rotateZ = interpolate(translateX.value, [-screenWidth, 0, screenWidth], [-15, 0, 15]);

    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotateZ: `${rotateZ}deg` },
      ],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <StyledMemoryCard style={animatedStyle}>
        <Container.Card>
          <Typo.SubTitle>Memory Card</Typo.SubTitle>
        </Container.Card>
      </StyledMemoryCard>
    </GestureDetector>
  );
};

export default MemoryCard;
