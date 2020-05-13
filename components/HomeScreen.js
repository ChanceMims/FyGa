import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

function HomeScreen(props) {
  //   const {height, width} = props.window;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.image}>
        <Image source={require('../img/icon.png')} />
      </View>

      <Text style={styles.text}>Find Challenges around you</Text>
      <Text style={styles.text}>Take them on with your team</Text>
      <Text style={styles.text}>
        Compete with others and conquer their territory
      </Text>
      {/* <Text>Height: {props.height}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    paddingTop: 80,
    paddingBottom: 30,
  },
  text: {
    fontSize: 24,
    padding: 20,
    margin: 20,
  },
});

export default HomeScreen;
