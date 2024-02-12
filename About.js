import React from 'react';
import {View, Text, Button} from 'react-native';
const About = ({route, navigation}) => {
  const {name} = route.params;
  return (
    <View>
      <Text>About {name}</Text>
      <Button
        title="Update"
        onPress={() =>
          navigation.setParams({
            name: 'Singh',
          })
        }
      />
    </View>
  );
};

export default About;
