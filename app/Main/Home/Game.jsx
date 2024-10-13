import React from 'react';
import { View } from 'react-native';
import { MemoryCard } from '../../../components/molecules/Element';

const Game = ({ navigation, route }) => {
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MemoryCard />
    </View>
  );
};

export default Game;
