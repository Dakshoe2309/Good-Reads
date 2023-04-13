import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class DVC extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/GoodReadsLogo')}
          style={styles.logo}
        />

        <Image source={require('../assets/redLine.png')} style={styles.line} />

        <Text style={{ fontFamily: 'Rock Salt', fontSize: 12, marginTop: 20 }}>
          "The Da Vinci Code" is a bestselling thriller novel written by Dan
          Brown, published in 2003. The story follows Harvard symbologist Robert
          Langdon and cryptographer Sophie Neveu as they investigate a murder in
          the Louvre Museum in Paris and uncover a conspiracy involving the
          Priory of Sion and the Holy Grail. The novel begins with the murder of
          the museum's curator, Jacques Saunière, who leaves a series of clues
          for Langdon and Neveu to follow in order to solve the mystery of his
          death. As they unravel the clues, they discover that Saunière was a
          member of the Priory of Sion, a secret society whose members include
          Leonardo da Vinci, Sir Isaac Newton, and Victor Hugo, among others.
          The Priory is dedicated to protecting the "sacred feminine," which
          they believe is embodied in Mary Magdalene, who they claim was the
          wife of Jesus Christ and the mother of his children. They also believe
          that the Holy Grail is not a cup, but rather a reference to the
          bloodline of Jesus and Mary Magdalene. Langdon and Neveu are pursued
          by the French police and the villainous Opus Dei, a Catholic
          organization that seeks to keep the secrets of the Holy Grail hidden.
          Along the way, they uncover a series of codes and symbols left by
          Saunière and Da Vinci, which lead them to the location of the Holy
          Grail. The novel has been controversial for its fictionalized
          portrayal of historical and religious figures and its suggestion that
          Jesus and Mary Magdalene were married and had children. It has also
          been praised for its intricate plot and fast-paced action, and has
          sold millions of copies worldwide.
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
