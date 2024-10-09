import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerShown: true,
          title: 'Home - Layout',
        }}
      />
      <Stack.Screen
        name='details'
        options={{
          headerShown: true,
          title: 'Details - Layout',
        }}
      />
    </Stack>
  );
}
