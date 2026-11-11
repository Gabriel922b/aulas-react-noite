import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, Button, TextInput } from 'react-native';

class Aula11 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campo1: '',
            campo2: '',
            resultado: ''
        }
        this.salvaNoBanco = this.salvaNoBanco.bind(this);
    }

    async salvaNoBanco() {
        const { campo1, campo2 } = this.state;

        if (!campo1 || !campo2) {
            Alert.alert('Atenção', 'Preencha todos os campos!');
            return;
        }

        // CORREÇÃO 1: Removido o espaço e alterado para http
        const IP_DA_SUA_MAQUINA = 'http://192.168.0.228:3000';

        try {
            const response = await fetch(`${IP_DA_SUA_MAQUINA}/salvar`, {
                method: 'POST',
                headers: {
                    // CORREÇÃO 2: Corrigido de 'aplication/json' para 'application/json'
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ campo1, campo2 })
            });

            if (response.ok) {
                this.setState({
                    resultado: `${campo1} ${campo2}`,
                    campo1: '', // Limpa o campo 1
                    campo2: ''  // Limpa o campo 2
                });
                Alert.alert('Sucesso', 'Dados salvos no MySQL!');
            } else {
                Alert.alert('Erro', 'Falha ao salvar os dados');
            }
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível conectar ao servidor backend.');
        }
    }

  render() {
    return (
      <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Primeiro texto..."
                onChangeText={(t) => this.setState({ campo1: t })}
            />
            <TextInput 
                style={styles.input}
                placeholder="Segundo texto..."
                onChangeText={(t) => this.setState({ campo2: t })}
            />

            <Button 
                title="Salvar e Exibir" 
                onPress={this.salvaNoBanco} 
            />

            <Text style={styles.textoResultado}>
                {this.state.resultado}
            </Text>
        </View>
    );
  }
}

export default Aula11;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  textoResultado: {
    marginTop: 20,
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold'
  }
});