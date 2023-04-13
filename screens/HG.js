import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class HG extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/GoodReadsLogo')}
          style={styles.logo}
        />

        <Image source={require('../assets/redLine.png')} style={styles.line} />

        <Text style={{ fontFamily: 'Rock Salt', fontSize: 12, marginTop: 20 }}>
          Mockingjay is the third and final book in The Hunger Games trilogy,
          written by Suzanne Collins. The story follows Katniss Everdeen as she
          becomes the face of the rebellion against the Capitol. After surviving
          the Quarter Quell Hunger Games in Catching Fire, Katniss is taken to
          District 13, which was thought to have been destroyed by the Capitol,
          but in reality had been preparing for war. District 13's leader,
          President Alma Coin, asks Katniss to become the "Mockingjay," a symbol
          of the rebellion to inspire the districts to rise up against the
          Capitol. In exchange, she demands that her fellow Hunger Games
          victors, including Peeta, be rescued from the Capitol. Katniss
          initially agrees to become the Mockingjay, but she struggles with her
          role as a symbol and her guilt over the destruction caused by the
          rebellion. She also learns that Peeta has been captured by the Capitol
          and is being tortured to turn him against the rebels. As the rebellion
          gains momentum, Katniss becomes more involved in the war effort,
          including participating in propaganda films to inspire the districts.
          However, she realizes that both the Capitol and District 13 are
          willing to use any means necessary to achieve victory, including
          sacrificing innocent lives. As the rebels prepare for a final assault
          on the Capitol, Katniss and her team attempt to rescue Peeta and other
          captured tributes. However, they are betrayed and many of them are
          killed. Peeta, who has been brainwashed by the Capitol, attacks
          Katniss, nearly killing her. In the final battle, Katniss, Peeta, and
          their allies infiltrate the Capitol and attempt to assassinate
          President Snow. In the chaos, many innocent civilians are killed,
          including Katniss's sister, Prim. It is later revealed that the
          bombing that killed Prim was orchestrated by President Coin, not the
          Capitol. In the end, Katniss kills President Coin instead of President
          Snow, and is acquitted of any wrongdoing due to her mental state at
          the time. She and Peeta return to District 12, which has been mostly
          destroyed, but they begin to rebuild their lives together. The book
          ends with Katniss reflecting on the events that have transpired and
          the toll they have taken on her.
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
