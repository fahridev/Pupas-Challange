import React from 'react';
import Tabs from "./src/navigation/Tabs";
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </>
  );
}


export default App;
