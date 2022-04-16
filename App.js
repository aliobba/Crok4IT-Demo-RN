import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import React from 'react';
import { useColorScheme, LogBox } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store'


import { NavigationRoot } from './src/routes'
import { AuthContext } from './src/components/AuthContext';

const Light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F9F9F9',
    input: '#c9acd8',
    label: 'black',
    button: 'black',
    border: 'black',
  },
};

const Dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#5d0b87',
    input: 'white',
    label: 'white',
    button: 'white',
    border: 'white',
  },
};



function App() {
  const scheme = useColorScheme();
  const [theme, setTheme] = React.useState(scheme);

  const authContext = React.useMemo(() => ({
    theme: theme,
    toggleTheme: () => {
      // 🌞 -> 🌚
      const nextTheme = theme === 'light' ? 'dark' : 'light';
      console.log(nextTheme);
      setTheme(nextTheme);
    }
  }), [theme]);

  React.useEffect(() => {
    LogBox.ignoreLogs(["EventEmitter.removeListener"])
  }, []);

  React.useEffect(() => {

    setTheme(scheme);
  }, [scheme]);

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >

        <AuthContext.Provider value={authContext}>
          <NavigationContainer theme={theme === 'dark' ? Dark : Light} >

            <NavigationRoot />
          </NavigationContainer>
        </AuthContext.Provider>
      </PersistGate>
    </Provider>
  )

}


export default App;
