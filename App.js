import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store'


import { NavigationRoot } from './src/routes'



function App() {
  const scheme = useColorScheme();

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >

        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme} >

          <NavigationRoot />

        </NavigationContainer>
      </PersistGate>
    </Provider>
  )

}


export default App;
