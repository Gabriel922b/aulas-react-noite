import React, { Component } from 'react';
import { Checkbox } from 'expo-checkbox';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Image, 
    TouchableOpacity,
} from 'react-native';


class Aula05 extends Component {

  //Construtor - Forma tradicional de inicializar estado ( dados )
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      email: '', 
      lembrarSenha: false
    };
  }


  render() {
    return (
      <View style={styles.container}>

        <View>

            <Text style={ styles.login }>LOGIN</Text>

            <Image
                source={ require('../img/logo_barao.png')}
                style={ styles.logo }
            />

            <Text style= { styles.label }>Nome: </Text>
            <TextInput
                style={ styles.input }
                placeholder='    Informe seu nome: '
            />

            <Text style= { styles.label }>Email: </Text>
            <TextInput
                style={ styles.input }
                placeholder='    Informe seu e-mail: '
            />

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Checkbox
                      value={this.state.lembrarSenha }
                      onValueChange= { (valor) => this.setState({ lembrarSenha: valor})}
                      color={ this.state.lembrarSenha ? '#4630EB': undefined}
                    />
                    <Text style={{ color: 'white', marginLeft: 3, fontSize: 12}}>Lembrar senha!</Text>
                </View>
                <Text style={{ color: '#39FF14', fontSize: 12}}>Esqueceu a senha?</Text>
            </View>

            <TouchableOpacity style={ styles.botao }>
                <Text style={ styles.textoBotao }>Entrar</Text>
            </TouchableOpacity>

            <Text style={ styles.texto1 }>Não tem conta? 
                <Text style={ styles.texto2 }>Cadastre-se!</Text>
            </Text>

        </View>
 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  input: {
    width: 250,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: 'white',
  },

  label:{
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
    // width:200
  },

  login: {
    color: '#39FF14',
    textAlign: 'center',
    marginLeft: 10,
    fontSize: 50,
    fontWeight: 'bold'
  },

  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
  },

  botao: {
    backgroundColor: 'green',
    width: 250,
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
  },

  textoBotao: {
    color: 'white',
    textAlign: 'center',
  },

  texto1: {
    color: 'white',
    fontSize: 15,
    marginTop: 6,
    textAlign: 'center',
  },

  texto2: {
    color: '#39FF14',
    //marginRight: 20,
    marginLeft: 10,
    fontSize: 15,
  },

});

export default Aula05;
