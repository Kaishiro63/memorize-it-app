import { router } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Home - LAYOUT</Text>
      <Button
        title='Go to Explore'
        onPress={() => {
          router.push('/(home)/details');
        }}
      />
    </View>
  );
};

export default Home;
