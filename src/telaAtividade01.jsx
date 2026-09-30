import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

class TelaLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#1A8738" />
        
        {/* Faixa verde superior */}
        <View style={styles.faixaVerde} />

        {/* Container do Logotipo para criar o efeito flutuante */}
        <View style={styles.logoContainer}>
          <Image source={require('../img/logo_barao.png')} style={styles.logo} />
        </View>

        {/* Conteúdo Principal */}
        <View style={styles.content}>
          <Text style={styles.titulo}>Bem-vindo!</Text>
          <Text style={styles.subtitulo}>Acesse sua conta</Text>

          {/* Formidável de Inputs */}
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#80c284"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => this.setState({ email: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#80c284"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ senha: text })}
          />

          {/* Esqueci minha senha */}
          <TouchableOpacity style={styles.linkEsqueci}>
            <Text style={styles.textoEsqueci}>Esqueci minha senha</Text>
          </TouchableOpacity>

          {/* Botão Entrar */}
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Entrar</Text>
          </TouchableOpacity>

          {/* Link para Cadastro */}
          <TouchableOpacity style={styles.linkCadastro}>
            <Text style={styles.textoAnuncio}>
              Ainda não tem conta? <Text style={styles.textoSublinhado}>Cadastre-se</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 30,
  },
  faixaVerde: {
    backgroundColor: 'black', // Tom de verde aproximado da imagem
    height: 110,
    width: '100%',
  },
  logoContainer: {
    alignSelf: 'center',
    marginTop: -55, // Faz o logo subir e sobrepor a faixa verde
    backgroundColor: '#ffffff',
    borderRadius: 60,
    padding: 0,
    elevation: 4, // Sombra leve no Android
    shadowColor: '#000', // Sombra leve no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0,
    shadowRadius: 3,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    paddingHorizontal: 35,
    alignItems: 'center',
    paddingTop: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 20,
    color: '#33333',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1.5,
    borderColor: '#1A8738',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000000',
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  linkEsqueci: {
    alignSelf: 'center',
    marginBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  textoEsqueci: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '500',
  },
  botao: {
    backgroundColor: '#4CB14C', // Verde mais claro do botão
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkCadastro: {
    marginTop: 'auto', // Empurra o texto para a parte inferior da tela
    marginBottom: 25,
  },
  textoAnuncio: {
    fontSize: 15,
    color: '#000000',
  },
  textoSublinhado: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default TelaLogin;
