import { router } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

const Details = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Details - BACK</Text>
      <Button title='Go to back' onPress={() => router.back()} />
    </View>
  );
};

export default Details;
