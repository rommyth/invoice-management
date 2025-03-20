import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import RootStack from './application/navigations/RootStack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import 'moment/locale/id';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <MenuProvider>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </MenuProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
