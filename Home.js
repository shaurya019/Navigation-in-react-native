import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import About from './About';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Press"
        onPress={() =>
          navigation.navigate('About', {
            name: 'Shaurya',
          })
        }
      />
    </View>
  );
};

export default Home;
