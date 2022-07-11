import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native'
import Home from './src/pages/home';
import TambahKontrakan from './src/pages/Kontrakan/AddKontrakan';
import EditKontrakan from './src/pages/Kontrakan/EditKontrakan';
import ListKontrakan from './src/pages/Kontrakan/ListKontrakan';
import Room from './src/pages/Kontrakan/ListKontrakan/Room';
import Login from './src/pages/login';
import Splash from './src/pages/Splash';

const Stack = createNativeStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="tambah-kontrakan" component={TambahKontrakan} />
        <Stack.Screen name="list-kontrakan" component={ListKontrakan} />
        <Stack.Screen name="edit-kontrakan" component={EditKontrakan} />

        {/* Room */}
        <Stack.Screen name="list-room" component={Room} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;