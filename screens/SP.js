import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class SP extends Component {
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
          "The Boy in the Striped Pajamas" is a novel by John Boyne published in
          2006. The story is set during World War II and centers on the
          relationship between two young boys from very different backgrounds.
          The main character is Bruno, a nine-year-old German boy who lives with
          his family in Berlin. When his father is promoted to Commandant of a
          concentration camp, the family is forced to move to a house near the
          camp. From his bedroom window, Bruno sees a fence with people wearing
          striped pajamas on the other side. He doesn't understand why they are
          there, but he becomes curious and decides to explore. On one of his
          adventures, he meets a Jewish boy named Shmuel who lives on the other
          side of the fence. Bruno and Shmuel become friends and begin to meet
          regularly at the fence. Bruno is unaware of the horrors that are
          happening in the camp and doesn't understand why Shmuel is so thin and
          always hungry. As the story progresses, the reader becomes aware of
          the brutal reality of the concentration camp and the true nature of
          Bruno's father's job. In the end, Bruno decides to help Shmuel find
          his father, who has gone missing inside the camp. Bruno puts on a
          striped uniform and enters the camp with Shmuel. They are led to a gas
          chamber where they hold hands and wait for the gas to fill the room.
          The novel is a powerful commentary on the human capacity for cruelty
          and the importance of empathy and understanding. It has been praised
          for its ability to communicate complex themes in a simple and
          accessible way, and has become a popular choice for young adult
          readers.
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
