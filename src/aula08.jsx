import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class Aula08 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        campo1: "",
        campo2: "",
        resultado: "",
      
    };
    this.confirmar = this.confirmar.bind(this);
  }

  confirmar() {
    this.setState({
        resultado: `${ this.state.campo1} ${ this.state.campo2}`
    })
  }



  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={ styles.input }
            placeholder='Primeiro texto ...'
            onChangeText={(t) => this.setState ({ campo1: t})}
        />
        <TextInput
            style={ styles.input }
            placeholder='Segundo texto ...'
            onChangeText={(t) => this.setState ({ campo2: t})}
        />
        
        <View style={ styles.botao }>
            <Button 
                title='Exibir Texto ou clique aqui'
                onPress={ this.confirmar }
            />
        </View>

        <Text style={styles.textoResultado }>
            { this.state. resultado }
        </Text>
      </View>
    );
  }
}

export default Aula08;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: 300,
    fontSize: 30,
    borderWidth: 6,
    marginBottom: 21
  },

  botao: {
    width: 300,
    fontSize: 30,
    borderWidth: 6,
    marginBottom: 21
  },

  textoResultado: {
    width: 300,
    fontSize: 30,
    color: 'green',
    textAlign: 'center'
  }
});

