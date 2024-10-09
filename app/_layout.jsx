import { Slot } from 'expo-router';
import { useEffect } from 'react';
import { SessionProvider } from './ctx';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import PoppinsRegular from '../assets/fonts/Poppins-Bold.ttf';
import PoppinsSemiBold from '../assets/fonts/Poppins-SemiBold.ttf';
import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf';
import PoppinsExtraBold from '../assets/fonts/Poppins-ExtraBold.ttf';

export default function Root() {
  SplashScreen.preventAutoHideAsync();

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
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
