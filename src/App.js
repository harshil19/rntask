import React from 'react';

import AppNavigation from './navigation/AppNavigation';
import {StatusBar} from 'react-native';
import colors from './themes/colors';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
      <AppNavigation />
    </>
  );
};

export default App;
