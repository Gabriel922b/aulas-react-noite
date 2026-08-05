import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Aula04 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
        source={require('../assets/icon.png')}
        style={ styles.icon }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Aula04;
