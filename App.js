import Application from './app/Application';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

import { ThemeContextProvider } from './provider/ThemeContext.js';

import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';

import PoppinsRegular from './assets/fonts/Poppins-Regular.ttf';
import PoppinsSemiBold from './assets/fonts/Poppins-SemiBold.ttf';
import PoppinsBold from './assets/fonts/Poppins-Bold.ttf';
import PoppinsExtraBold from './assets/fonts/Poppins-ExtraBold.ttf';

import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  const [loaded, error] = useFonts({
    'Poppins-Regular': PoppinsRegular,
    'Poppins-SemiBold': PoppinsSemiBold,
    'Poppins-Bold': PoppinsBold,
    'Poppins-ExtraBold': PoppinsExtraBold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <ThemeContextProvider>
              <Application />
            </ThemeContextProvider>
          </Provider>
        </PersistGate>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
