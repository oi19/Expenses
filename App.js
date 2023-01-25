import React from 'react';
import AppNav from './src/navigation/navigation';
import { Provider } from 'react-redux'
import { store } from './src/redux/configration';



const App = () => {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
};


export default App;
