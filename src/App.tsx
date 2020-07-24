import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#e5e5e5" barStyle="dark-content" />
      <Routes />
    </>
  );
};

export default App;
