import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class Aula08 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        campo1: "",
        campo2: "",
        campo3: "",
        campo4: "",
        resultado: "",
      
    };
    this.confirmar = this.confirmar.bind(this);
  }

  confirmar() {
    this.setState({
        resultado: `${ this.state.campo1} ${ this.state.campo2} ${ this.state.campo3} ${ this.state.campo4}`,
        campo1: "",
        campo2: "",
        campo3: "",
        campo4: "",
    })
  }



  render() {
    return (
      <View style={styles.container}>
        <TextInput
            value={this.state.campo1}
            style={ styles.input }
            placeholder='Primeiro texto ...'
            onChangeText={(t) => this.setState ({ campo1: t})}
        />
        <TextInput
            value={this.state.campo2}
            style={ styles.input }
            placeholder='Segundo texto ...'
            onChangeText={(t) => this.setState ({ campo2: t})}
        />
        <TextInput
            value={this.state.campo3}
            style={ styles.input }
            placeholder='Terceiro texto ...'
            onChangeText={(t) => this.setState ({ campo3: t})}
        />
        <TextInput
            value={this.state.campo4}
            style={ styles.input }
            placeholder='Quarto texto ...'
            onChangeText={(t) => this.setState ({ campo4: t})}
        />
        
        <View style={ styles.botao }>
            <Button 
                title='Clique aqui'
                onPress={ this.confirmar }
                color= '#000d27'
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
    backgroundColor: '#d7f3ff',
  },

  input: {
    width: 300,
    fontSize: 30,
    borderWidth: 5,
    marginBottom: 20,
    textAlign: 'center',
    borderColor: '#281a00aa',
  },

  botao: {
    width: 300,
    fontSize: 30,
    borderWidth: 5,
},

  textoResultado: {
    width: 300,
    fontSize: 33,
    color: 'blue',
    textAlign: 'center'
  }
});



//UMA TELA COM 4 CAMPOS E UM BOTÃO
//AO CLICAR NO BOTÃO MOSTRA ABAIXO 
//AS INFORMAÇÕES INSERIDAS NOS CAMPOS

