import React from 'react';
import { Text, View } from 'react-native';

const Edition = ({ navigation, route }) => {
  return (
    <View>
      <Text>Edition {route.params.id}</Text>
    </View>
  );
};

export default Edition;
