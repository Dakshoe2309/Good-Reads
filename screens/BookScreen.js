import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';

import HPcos from './HPcos';
import HG from './HG';
import FS from './FS';
import Dic from './Div';
import DVC from './DVC';
import HPdh from './Hpdh';
import SP from './SP';
import MB from './MB';
import GC from './GC';

export default class BookScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/GoodReadsLogo')}
          style={styles.logo}
        />

        <Image source={require('../assets/redLine.png')} style={styles.line} />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HPcos');
          }}>
          <Image source={require('../assets/HP2.png')} style={styles.cos} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HG');
          }}>
          <Image
            source={require('../assets/HungerGames1.jpg')}
            style={styles.mock}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('FS');
          }}>
          <Image
            source={require('../assets/FaultInOurStars.jpg')}
            style={styles.fault}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Div');
          }}>
          <Image
            source={require('../assets/Divergent.jpg')}
            style={styles.dive}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('DVC');
          }}>
          <Image
            source={require('../assets/DaVinci.jpg')}
            style={styles.vinci}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HPdh');
          }}>
          <Image source={require('../assets/HP7.png')} style={styles.dh} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('MB');
          }}>
          <Image source={require('../assets/ToKill.png')} style={styles.mk} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SP');
          }}>
          <Image source={require('../assets/BoyInSP')} style={styles.bsp} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('GC');
          }}>
          <Image source={require('../assets/Gruff.jpg')} style={styles.gf} />
        </TouchableOpacity>

                <View style={{ marginTop: 0 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('HomeScreen');
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
  cos: {
    width: 90,
    height: 134,
    marginTop: 36,
    marginLeft: 35,
  },

  mock: {
    width: 90,
    height: 134,
    marginTop: -134,
    marginLeft: 140,
  },

  fault: {
    width: 90,
    height: 134,
    marginTop: -134,
    marginLeft: 245,
  },

  dive: {
    width: 90,
    height: 134,
    marginTop: 44,
    marginLeft: 35,
  },

  vinci: {
    width: 90,
    height: 134,
    marginTop: -134,
    marginLeft: 140,
  },

  dh: {
    width: 90,
    height: 134,
    marginTop: -134,
    marginLeft: 245,
  },

  mk: {
    width: 90,
    height: 134,
    marginTop: 44,
    marginLeft: 35,
  },

  bsp: {
    width: 90,
    height: 134,
    marginTop: -134,
    marginLeft: 140,
  },

  gf: {
    width: 90,
    height: 134,
    marginTop: -134,
    marginLeft: 245,
  },
});
