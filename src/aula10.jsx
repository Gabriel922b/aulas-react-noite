import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { db } from './config/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

class Aula10 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produto: ''
    };

    this.salvarNoBanco = this.salvarNoBanco.bind(this);

  }

  salvarNoBanco = async () => {
    const { produto } = this.state;

    if(!produto.trim()){
        alert('Digite o nome de um produto!');
        return;
    }

    try {
        await addDoc(collection(db, 'produtos'),{
            nome: produto,
            data: new Date(),
        });
        alert('Salvo com sucesso!');
        this.setState({ produto: ''})
    }catch (e) {
        console.error(e);
        alert("Erro ao salvar.")
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={ styles.titulo }>
            {this.props.titulo || 'Firebase + Expo'}
        </Text>
        <TextInput
        style={ styles.input }
        placeholder='Digite o nome do produto: '
        value={ this.state.produto }
        onChangeText={ (texto) => this.setState({ produto: texto })} 
        />
        <Button title='Salvar produto' onPress={this.salvarNoBanco}/>
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

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  }
});

export default Aula10;
