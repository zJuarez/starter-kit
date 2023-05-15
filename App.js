import React from 'react';

import AppNavigation from './navigation/appNavigation';
import HomeScreen from './screens/HomeScreen';
import { NativeWindProvider } from 'react-native-nativewind';

export default function App() {
  return (
    <NativeWindProvider> 
      <AppNavigation />
    </NativeWindProvider>
  );
}
