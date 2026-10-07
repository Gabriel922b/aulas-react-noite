import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

class Tela01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    const TAMANHO = 80;
    return (
      <View style={styles.container}>
            <View style={styles.bloco1}>
  
            </View>

            <View style={ styles.divisor }>
                <Image
                    source={ require('../img/logo_barao.png')}
                    style={[
                        styles.imagem,
                        {
                            width: TAMANHO,
                            height: TAMANHO,
                            borderRadius: TAMANHO / 2,
                            top: -(TAMANHO) / 2,
                        }
                    ]}
                />
            </View>

            <View style={styles.bloco2}>
                    <Text style={ styles.welcomeText }>Bem-Vindo!</Text>
                    <Text style={ styles.subText }>Acesse sua conta</Text>

                    <TextInput
                        style={styles.input}
                        placeholder='E-mail'
                        placeholderTextColor="#4caf50"
                        keyboardType='email-address'
                    />
                     <TextInput
                        style={styles.input}
                        placeholder='senha'
                        placeholderTextColor="#4caf50"
                        keyboardType='password'
                     />

                      <TouchableOpacity style={ styles.forgotPassword}>
                        <Text style={{ color: '#000', textDecorationLine: 'underline'}}>Esqueci Minha Senha</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={ styles.button}>
                        <Text style={ styles.buttonText}>Entrar</Text>
                      </TouchableOpacity>
            </View>

            <View style={styles.bloco3}>
                <Text style={ styles.footerText}> Nao tem conta?</Text>
                <TouchableOpacity>
                  <Text style={ styles.linkText }> Cadastra-se</Text>
                </TouchableOpacity>
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
  },

  bloco1:{
    backgroundColor: 'black',
    width: '100%',
    height: 50,
  },

  bloco2: {
    flex: 1,
    width: '80%',
  },

  bloco3: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  divisor: {
    height: 0,
    overflow: 'visible',
    zIndex: 10,
  },

  imagem: {
    position: 'absolute',
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: 'black',
  },

  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
    marginTop: 60,
    textAlign: 'center',
  },

  subText: {
    fontSize: 28,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#4caf50',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    color: 'black',
  },

  forgotPassword: {
    alignSelf: 'center',
    marginBottom: 30,
  },

  button: {
    width: '100%',
    backgroundColor: '#4caf50',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontsize: 18,
    fontWeight: 'bold',
  },

  footerText: {
    color: '#000',
  },

  linkText: {
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

});

export default Tela01;
