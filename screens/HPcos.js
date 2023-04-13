import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class HPcos extends Component {
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
          "Harry Potter and the Chamber of Secrets" is the second book in J.K.
          Rowling's popular Harry Potter series. In this book, we follow Harry's
          second year at Hogwarts School of Witchcraft and Wizardry. The book
          begins with Harry spending a miserable summer with his Muggle
          (non-magical) relatives, the Dursleys. Harry is surprised when he is
          visited by a house-elf named Dobby, who warns him not to return to
          Hogwarts for his safety. Despite Dobby's warnings, Harry is determined
          to go back to school, and is eventually rescued by his friends Ron
          Weasley and Hermione Granger. At Hogwarts, strange things start
          happening. The students are being petrified, and a message on the wall
          warns that the Chamber of Secrets has been opened. Harry, Ron, and
          Hermione suspect that the culprit is the heir of Salazar Slytherin,
          who may be trying to rid the school of Muggle-born students. As the
          attacks continue, Harry and his friends try to uncover the identity of
          the heir of Slytherin and the location of the Chamber of Secrets. They
          suspect that the answer lies with the mysterious diary of Tom Riddle,
          a former student at Hogwarts. In the end, Harry and his friends
          discover that the true identity of the heir of Slytherin is none other
          than Ginny Weasley, Ron's younger sister. They find the entrance to
          the Chamber of Secrets, and Harry goes in alone to confront the
          monster within. With the help of Fawkes, Dumbledore's phoenix, Harry
          is able to defeat the monster and destroy the diary of Tom Riddle. The
          book ends with Harry and his friends receiving awards for their
          bravery, and Harry looking forward to returning to Hogwarts for his
          third year.
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
