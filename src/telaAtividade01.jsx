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


class Atividade01 extends Component {

  //Construtor - Forma tradicional de inicializar estado ( dados )
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '', 
      lembrarSenha: false
    };
  }


  render() {
    return (
      <View style={styles.container}>

        <View>

            

            <Image
                source={ require('../img/logo_barao.png')}
                style={ styles.logo }
            />
            <Text style={ styles.login }>Bem-Vindo!</Text>
            <Text style={ styles.login2 }>Acesse sua conta</Text>

            <Text style= { styles.label }> Email: </Text>
            <TextInput
                style={ styles.input }
                placeholder='    Informe seu email: '
            />

            <Text style= { styles.label }>Senha: </Text>
            <TextInput
                style={ styles.input }
                placeholder='    Informe sua senha: '
            />

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
               
                <Text style={{ color: 'black',}}>Esqueci minha senha</Text>
            </View>

            <TouchableOpacity style={ styles.botao }>
                <Text style={ styles.textoBotao }>Entrar</Text>
            </TouchableOpacity>

            <Text style={ styles.texto1 }>Ainda Não tem conta? 
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
    backgroundColor: 'white',
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
    color: 'black',
    textAlign: 'center',
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50
  },

   login2: {
    color: 'grey',
    textAlign: 'center',
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50
  },

  logo: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginBottom: 10,
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
    color: 'black',
    fontSize: 15,
    marginTop: 70,
    textAlign: 'center',
  },

  texto2: {
    color: 'black',
    //marginRight: 20,
    marginLeft: 10,
    fontSize: 15,
  },

});

export default Atividade01;
