import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import RootStack from './application/navigations/RootStack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text} from 'react-native';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
