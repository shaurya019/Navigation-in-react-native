import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './Home';
import About from './About';
import {route , Alert, Pressable, Text} from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerRight: () => (
            <Pressable onPress={() => alert('Menu Button Pressed')}>
              <Text>Menu</Text>
            </Pressable>
          ),
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Welcome to Home',
            // headerRight: () => (
            //   <Pressable onPress={() => alert('Menu Button Pressed')}>
            //     <Text>Menu</Text>
            //   </Pressable>
            // ),
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
