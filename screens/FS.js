import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class FS extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/GoodReadsLogo')}
          style={styles.logo}
        />

        <Image source={require('../assets/redLine.png')} style={styles.line} />

        <Text style={{ fontFamily: 'Comic Sans MS', fontSize: 12, marginTop: 20 }}>
          "The Fault in Our Stars" is a novel by John Green, published in 2012.
          The story is narrated by a 16-year-old girl named Hazel Grace
          Lancaster, who has been diagnosed with thyroid cancer that has spread
          to her lungs. Hazel is forced to carry around an oxygen tank
          everywhere she goes and is unable to attend school due to her illness.
          At a cancer support group, Hazel meets a 17-year-old boy named
          Augustus Waters, who has lost his leg to osteosarcoma. Hazel and
          Augustus bond over their shared experiences with cancer and a love of
          literature, particularly a novel called "An Imperial Affliction" by
          Peter Van Houten, which ends abruptly without resolution. Augustus
          arranges for them to travel to Amsterdam to meet the reclusive author
          and learn what happens to the book's characters after the novel ends.
          However, when they arrive in Amsterdam, they discover that Van Houten
          is a drunken recluse who provides them with no answers. During their
          trip, Hazel and Augustus fall in love, and Augustus reveals that his
          cancer has returned and has spread throughout his body. He becomes
          increasingly ill, and his health deteriorates rapidly. Hazel and
          Augustus try to make the most of their time together, but Augustus
          ultimately dies from his illness. The novel ends with Hazel struggling
          to come to terms with Augustus's death but finding solace in the
          knowledge that their love has made a difference in each other's lives.
          The book explores themes of love, mortality, the meaning of life, and
          the power of literature to provide comfort and understanding in
          difficult times.
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
