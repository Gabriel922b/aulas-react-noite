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
      <View style={ styles.container }>

        <Image 
            source={ require('../assets/icon.png' )}
            style= { styles.icon }
        />
        <Image 
            source={{ uri: 'https://media.newyorker.com/photos/5909515e2179605b11ad2fc6/master/w_2560%2Cc_limit/godzilla-580.jpg' }}
            style= { styles.icon }
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

  icon: {
    width: 150,
    height: 150,
  }

});

export default Aula04;
