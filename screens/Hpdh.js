import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class HPdh extends Component {
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
          "Harry Potter and the Deathly Hallows" is the seventh and final book
          in J.K. Rowling's Harry Potter series. It was published in 2007 and
          follows the adventures of Harry Potter and his friends Hermione
          Granger and Ron Weasley as they search for and destroy the remaining
          Horcruxes (objects containing a piece of the evil Lord Voldemort's
          soul), and ultimately face Voldemort in a final battle. The book
          begins with Harry preparing to leave the Dursley's home for the last
          time, as he turns 17 years old and becomes of age in the wizarding
          world. He is joined by Hermione and Ron, and the trio embarks on a
          dangerous mission to find and destroy the remaining Horcruxes, which
          they believe will weaken Voldemort enough for Harry to defeat him.
          Their quest takes them to various locations, including Gringotts
          Wizarding Bank, where they break into one of the bank's high-security
          vaults to retrieve a Horcrux, and to Godric's Hollow, where Harry was
          born and where his parents are buried. They also discover the
          existence of the Deathly Hallows, a trio of powerful magical objects
          that can make the possessor the master of death. As the trio gets
          closer to finding and destroying all the Horcruxes, Voldemort becomes
          increasingly aware of their actions and launches attacks against them
          and their allies. In the final battle, Harry confronts Voldemort and
          ultimately triumphs over him, with the help of his friends and loved
          ones. The book ends with an epilogue set 19 years later, in which
          Harry and Ginny Weasley are married with three children, Ron and
          Hermione are married with two children, and their children are
          starting their own adventures at Hogwarts School of Witchcraft and
          Wizardry.
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
