import React from 'react';
import AppNav from './src/navigation/navigation';
import { Provider } from 'react-redux'
import { store } from './src/redux/configration';
import { StatusBar } from 'react-native';



const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={'#2b2d2f'}
      />
      <AppNav />
    </Provider>
  );
};


export default App;
