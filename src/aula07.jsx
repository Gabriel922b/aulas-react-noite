import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class Aula07 extends Component {

  constructor(props) {
    super(props);
    this.state = {
        textoDigitado: ''
    }
    this.pegaTexto = this.pegaTexto.bind(this);
  }

  pegaTexto(texto) {
    this.setState({
        textoDigitado: texto
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={ styles.input }
            placeholder='Digite algo aqui...'
            onChangeText={ this.pegaTexto } 
        />
        <Text style={{ color: 'red' }}>
            {this.state.textoDigitado}
        </Text>
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

export default Aula07;
