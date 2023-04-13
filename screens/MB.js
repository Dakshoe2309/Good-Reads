import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class MB extends Component {
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
          "To Kill a Mockingbird" is a novel by Harper Lee published in 1960.
          The story is set in the fictional town of Maycomb, Alabama, during the
          Great Depression. The book is narrated by Scout Finch, a young girl,
          and follows her experiences with her brother Jem and their friend Dill
          as they grow up in the town. The novel begins with Scout and Jem's
          fascination with their reclusive neighbor, Arthur "Boo" Radley, whom
          they have never seen. They become interested in learning more about
          him and attempt to lure him out of his house. Meanwhile, their father,
          Atticus Finch, a lawyer, is appointed to defend Tom Robinson, a black
          man accused of raping a white woman. As Atticus takes on the case, the
          children witness the racial prejudice and injustice of the town's
          legal system. Despite overwhelming evidence in favor of Tom's
          innocence, the jury finds him guilty, and he is sentenced to death.
          The verdict and its aftermath deeply affect the children, and they
          struggle to come to terms with the injustice they have witnessed. In
          the book's climactic scene, Scout and Jem are attacked on their way
          home from a school pageant. They are saved by Boo Radley, who reveals
          himself to be a kind and gentle person, not the monster they had
          imagined him to be. "To Kill a Mockingbird" is a powerful exploration
          of racial prejudice, justice, and innocence. It is considered a
          classic of modern American literature and has won numerous awards,
          including the Pulitzer Prize.
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
