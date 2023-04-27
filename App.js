import React from 'react';
import StackNavigation from './src/screens/stack_nav/StackNavigation';
import Toast from 'react-native-toast-message';
import 'react-native-gesture-handler';

const App = () => {

  return (
    <>
      <StackNavigation />
      <Toast autoHide={true} visibilityTime={3000} />
    </>
  );
}

export default App;