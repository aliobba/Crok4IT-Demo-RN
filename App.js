/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { useColorScheme, Platform, NativeModules, LogBox } from 'react-native';

// Redux
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store'

// Routes
import { NavigationRoot } from './src/routes'

// Context
import { AuthContext } from './src/context/authDarkModeContext';

// Constants
const Light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F9F9F9',
    negativeBackground: '#5d0b87',
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
    negativeBackground: '#F9F9F9',
    input: 'white',
    label: 'white',
    button: 'white',
    border: 'white',
    orange: '#f48037'
  },
};


/* -------------------------------------------------------------------------- */
/*                                     APP                                    */
/* -------------------------------------------------------------------------- */
function App() {

  // Initialisation
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

  // Component Lifecycle
  React.useEffect(() => {
    LogBox.ignoreLogs(["EventEmitter.removeListener"]);
    LogBox.ignoreLogs(["Unable to define method 'getConstants()' on NativeModule 'RNConfig'. "]);
    if (Platform.OS === "android") {
      NativeModules.SplashScreen.hide();
      /* setTimeout(() => {
      }, 6000); */
    }

  },[]);

  React.useEffect(() => {

    setTheme(scheme);
  }, [scheme]);

  /* -------------------------------- RENDERING ------------------------------- */
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
