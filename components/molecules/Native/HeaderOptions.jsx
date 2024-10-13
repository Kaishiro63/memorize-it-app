import React from 'react';
import { Image } from '../../atoms';
import { useNavigation } from '@react-navigation/native';

const HeaderOptions = ({
  title,
  headerShown = true,
  backgroundColor,
  // headerRight = () => (
  //   <View style={{ marginRight: 10 }}>
  //     <Text style={{ color: 'white' }}>Right</Text>
  //   </View>
  // ),
  headerLeft,
  gestureEnabled = true,
  backNavigation,
}) => {
  const navigation = useNavigation();
  return {
    title,
    headerShown,
    headerStyle: {
      backgroundColor,
    },
    headerTransparent: !backgroundColor,
    // headerRight,
    headerLeft:
      headerLeft ||
      (() => (
        <Image.Icon
          onPress={() => backNavigation || navigation.goBack()}
          isHeaderIcon
          name={'arrowleft'}
          size={24}
        />
      )),
    gestureEnabled,
    headerTitleAlign: 'center',
  };
};

export default HeaderOptions;
