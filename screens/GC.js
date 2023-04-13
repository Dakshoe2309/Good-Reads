import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class GC extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/GoodReadsLogo')}
          style={styles.logo}
        />

        <Image source={require('../assets/redLine.png')} style={styles.line} />

        <Text style={{ fontFamily: 'Rock Salt', fontSize: 12, marginTop: 20 }}>
          {' '}
          "The Gruffalo's Child" is a children's picture book written by Julia
          Donaldson and illustrated by Axel Scheffler. It is a sequel to the
          hugely popular book "The Gruffalo." The story follows the adventures
          of the Gruffalo's child, a curious and adventurous creature who is
          eager to explore the world outside her cave. Despite her father's
          warning about the Big Bad Mouse, the Gruffalo's child sets out into
          the deep dark wood to find the mouse. As she walks through the woods,
          the Gruffalo's child encounters several creatures who warn her about
          the mouse's cunning and dangerous nature. But the Gruffalo's child is
          determined to find the mouse and prove herself to be just as brave as
          her father. In the end, the Gruffalo's child does come face-to-face
          with the mouse, who cleverly tricks her into believing that he is
          actually the Big Bad Mouse. Frightened, the Gruffalo's child runs back
          to her cave, relieved to be safe and sound. Overall, "The Gruffalo's
          Child" is a fun and engaging story about bravery, curiosity, and the
          power of imagination. Children and adults alike will enjoy following
          the Gruffalo's child on her journey through the deep dark wood.
        </Text>

        <View style={{ marginTop: 420 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('BookScreen');
            }}>
            <Image
              source={require('../assets/BackB.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8EFFF',
  },

  logo: {
    width: 370,
    height: 54,
    marginTop: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  line: {
    width: 320,
    height: 44,
    marginTop: -49,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  button: {
    backgroundColor: '#A8EFFF',
    width: 383,
    height: 58,
    marginTop: -406,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
