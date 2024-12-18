import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Container, Typo } from '../../atoms';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  runOnJS,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;

const StyledMemoryCard = styled(Animated.View)`
  width: 80%;
`;

const MemoryCard = ({ card, onSwipeComplete }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotateY = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onChange((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onFinalize(() => {
      const shouldBeDismissed = Math.abs(translateX.value) > screenWidth * 0.4;

      if (shouldBeDismissed) {
        translateX.value = withTiming(
          translateX.value > 0 ? screenWidth + 100 : -screenWidth - 100,
          { duration: 300 },
          () => {
            runOnJS(onSwipeComplete)();
          }
        );
      } else {
        translateX.value = withSpring(0, { damping: 20, stiffness: 150 });
        translateY.value = withSpring(0, { damping: 20, stiffness: 150 });
      }
    });

  const tap = Gesture.Tap().onStart(() => {
    rotateY.value = withTiming(isFlipped ? 0 : 360, { duration: 300 });
    runOnJS(setIsFlipped)(!isFlipped);
  });

  const animatedStyle = useAnimatedStyle(() => {
    const rotateZ = interpolate(translateX.value, [-screenWidth, 0, screenWidth], [-15, 0, 15]);
    const rotateYDeg = `${interpolate(rotateY.value, [0, 180], [0, 180])}deg`;

    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotateZ: `${rotateZ}deg` },
        { rotateY: rotateYDeg },
      ],
      backfaceVisibility: 'hidden',
    };
  });

  return (
    <GestureDetector gesture={tap}>
      <GestureDetector gesture={gesture}>
        <StyledMemoryCard style={animatedStyle}>
          <Container.Card>
            <Typo.SubTitle textAlign={'center'}>
              {isFlipped ? card.answer : card.question}
            </Typo.SubTitle>
          </Container.Card>
        </StyledMemoryCard>
      </GestureDetector>
    </GestureDetector>
  );
};

export default MemoryCard;
