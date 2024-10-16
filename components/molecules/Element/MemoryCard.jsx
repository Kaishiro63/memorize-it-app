import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Container, Typo } from '../../atoms';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  runOnJS,
  withTiming,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;

const StyledMemoryCard = styled(Animated.View)`
  width: 80%;
`;

const tab = [
  { question: 'question1', answer: 'answer1' },
  { question: 'question2', answer: 'answer2' },
  { question: 'question3', answer: 'answer3' },
  { question: 'question4', answer: 'answer4' },
];

const MemoryCard = ({ cards = tab }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotateY = useSharedValue(0);

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
            <Typo.SubTitle>{isFlipped ? 'answer' : 'question'}</Typo.SubTitle>
          </Container.Card>
        </StyledMemoryCard>
      </GestureDetector>
    </GestureDetector>
  );
};

export default MemoryCard;
