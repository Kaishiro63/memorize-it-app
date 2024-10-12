import React from 'react';
import { Text, View } from 'react-native';

const Game = ({ navigation, route }) => {
  return (
    <View>
      <Text>Game {route.params.id}</Text>
    </View>
  );
};

export default Game;
