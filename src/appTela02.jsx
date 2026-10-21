import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity,} from 'react-native';

// Importacoes do FireBase (v9/v10 modular)
import { initializeApp, initializeAppCheck } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getfirestore, doc, setDoc } from 'firebase/firestore';

//Inicializa o firebase 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const firebaseConfig = {
  apiKey: "AIzaSyDpP1nQPTjjB-slSKt38WMniAvn8mIOQoo",
  authDomain: "primeiro-projeto-noite-1b040.firebaseapp.com",
  projectId: "primeiro-projeto-noite-1b040",
  storageBucket: "primeiro-projeto-noite-1b040.firebasestorage.app",
  messagingSenderId: "1001686671130",
  appId: "1:1001686671130:web:ec0b4f58f3f6cfcc9516a3"
};


class Tela02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        tipoUsuario: 'Aluno', //opções: aluno, responsavel, professor
        dropDownAberto: false,
      
    };
  }

  render() {

    const userTypes = ['Aluno', 'Responsavel', 'Professor'];
    const TAMANHO = 80;

    return (
            <ScrollView contentContainerStyle={styles.scrollContent}>

                <Text style={styles.title}>Crie sua conta</Text>
                <Text style={styles.subtitle}>Preencha os dados</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Nome Completo'
                    placeholderTextColor={'#4caf50'}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor={'#4caf50'}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    placeholderTextColor={'#4caf50'}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Confirmar Senha'
                    placeholderTextColor={'#4caf50'}
                />

                {/* SELETOR DE TIPO DE USUARIO: ALUNO, RESPONSAVEL E PROFESSOR 
                <Text style={styles.label}>Tipo de Usuário</Text>
                    <View style={ styles.userTypeContainer}>
                        {userType.map((type) =>(
                            <TouchableOpacity
                            key={type}
                            style={[styles.typeButton, this.state.tipoUsuario === type && styles.activeType]}
                            >
                                <Text style={[styles.typeText, this.state.tipoUsuario === type && styles.activeTypeText]}>
                                    {type}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    */}

                    <Text style={styles.label}>Tipo de Usuario</Text>
                    <View style={styles.dropdownContainer}>
                      <TouchableOpacity
                        style={styles.dropdownSelector}
                        onPress={()=> this.setState({dropDownAberto: !this.state.dropDownAberto})}
                      >
                        <Text style={styles.dropdownSelectorText}>{this.state.tipoUsuario}</Text>
                        <Text style={styles.dropdownArrow}>{this.state.dropDownAberto? '▲' : '▼'}</Text>
                      </TouchableOpacity>
                      {this.state.dropDownAberto && (
                        <View style={ styles.dropdownList }>
                            { userTypes.map((type) => (
                                <TouchableOpacity
                                key={type}
                                style={ styles.dropdownItem }
                                onPress={ () => this.setState({ tipoUsuario: type, dropDownAberto: false })}
                                >
                                 <Text style={[
                                    styles.drompdownItemText,
                                    this.state.tipoUsuario === type && styles.drompdownItemTextSelected
                                 ]}>
                                    {type}
                                 </Text>
                                </TouchableOpacity>
                            ))}

                        </View>
                      )}
                    </View>


                
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>

                    <View style={ styles.bloco3 }>
                        <Text style={styles.footerText}>Já tem conta? </Text>
                        <TouchableOpacity>
                            <Text style={styles.linkText}>Faça login</Text>
                        </TouchableOpacity>
                    
                    </View>
            

            </ScrollView>
        
    );
  }
}

export default Tela02;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'center',
    marginBottom: 25,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderBlockColor: '#4caf50',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    color: '#000',
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#4caf50',
    borderRadius: 8,
    overflow: 'hidden',
  },

  typeButton: {
    flex: 1,
    padding: 12,
    alignSelf: 'center',
    borderRightWidth: 1,
    borderRightColor: '#4caf50',
  },

  activeType: {
    backgroundColor: '#4caf50',
  },
  typeText: {
    color: '#4caf50',
    fontWeight: 'bold',
  },
  activeTypeText: {
    color: '#fff',
  },

  dropdownContainer: {
    marginBottom: 25,
    position: 'relative',
    zIndex: 1000,
  },

  dropdownSelector: {
    borderWidth: 1,
    borderColor: '#4caf50',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  dropdownSelectorText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  dropdownList:  {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#4caf50',
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },


  dropdownArrow: {
    position: 'absolute',
    right: 15,
    color: '#4caf50',
    fontSize: 14
  },  
  
  dropdownItem: {
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  drompdownItemText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
  },

  drompdownItemTextSelected: {
    color: '#4caf50',
    fontWeight: 'bold',
  },

  button: {
    width: '100%',
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems:'center',

  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',

  },

  bloco3: {
    height: 80,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'

  },

   footerText: {
    color:'#000',
    
  },

  linkText: {
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',

  },
});

