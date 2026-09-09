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
            <Text style={styles.texto}>
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

  input: {
    borderWidth: 2,
    padding: 15,
    width: 300,
    fontSize: 30,
  },
  texto:{
    fontSize: 30,
    color: 'red'
  }
});

export default Aula07;
