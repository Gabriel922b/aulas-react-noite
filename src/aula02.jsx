import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Aula02 extends Component {
    render() {
        return (
            <View>
                <Text>Estrutura Padrão</Text>
                <Text style={ styles.textoCentral }>Estrutura Padrão</Text>
                <Text style={ styles.textoFinal }>Estrutura Padrão</Text>
            </View>
        )
    }
}

export default Aula02;

const styles = StyleSheet.create({
    textoCentral:{
        color: 'green',
        fontSize: 30,
        backgroundColor: 'black',
        padding: 12
    }, 
    
    textoFinal: {
        backgroundColor: 'blue',
        color:  'white',

    }
})