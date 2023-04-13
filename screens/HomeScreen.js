import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/GoodReadsLogo')}
          style={styles.logo}
        />

        <Image source={require('../assets/redLine.png')} style={styles.line} />

        <Image source={require('../assets/BottomHalf')} style={styles.bottom} />

        <Image source={require('../assets/SignUp.png')} style={styles.signUp} />

        <Text style={{ fontFamily: 'Rock Salt', fontSize: 12, marginLeft : 128, color : "#FF0505" }}>
          By Daksh Shah©
        </Text>
<View style={{ marginTop: 410 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('BookScreen');
            }}>
            <Image
              source={require("../assets/Search.png")}
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
    marginTop: 10,
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
  bottom: {
    width: 374,
    height: 324,
    marginTop: 220,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  signUp: {
    width: 213,
    height: 44,
    marginTop: -470,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#A8EFFF',
    width: 235,
    height: 68,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
