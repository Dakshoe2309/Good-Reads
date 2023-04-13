import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class Div extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/GoodReadsLogo')}
          style={styles.logo}
        />

        <Image source={require('../assets/redLine.png')} style={styles.line} />

        <Text style={{ fontFamily: 'Rock Salt', fontSize: 12, marginTop: 20 }}>
          "Divergent" is a young adult novel by Veronica Roth set in a dystopian
          society in Chicago. The story follows Beatrice Prior, a 16-year-old
          girl who must choose a faction to join. In this society, people are
          divided into five factions, each representing a particular virtue:
          Abnegation (selflessness), Amity (peacefulness), Candor (honesty),
          Dauntless (bravery), and Erudite (intelligence). Beatrice was born
          into Abnegation but never felt like she belonged there. She was always
          fascinated by the Dauntless, who are responsible for protecting the
          city. When it's time for her to choose a faction, she decides to join
          the Dauntless. The initiation process is rigorous, and Beatrice, who
          renames herself Tris, struggles to keep up with the physical demands.
          She also learns that the faction system is not as perfect as it seems.
          The Erudite, led by Jeanine Matthews, are plotting to overthrow
          Abnegation and take control of the government. Tris discovers that she
          is a Divergent, which means she doesn't fit neatly into any one
          faction. Divergents are considered dangerous because they can't be
          controlled. Tris and her love interest, Four, must work together to
          stop the Erudite from carrying out their plan. In the end, Tris
          sacrifices herself to save the city from the Erudite's mind-control
          serum. Her bravery inspires others to stand up against the injustice
          of the faction system and work towards a better future. The book
          explores themes of identity, conformity, and individuality. It was
          followed by two sequels, "Insurgent" and "Allegiant," and was also
          adapted into a successful film series.
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
