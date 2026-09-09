import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Aula03 extends Component {
    render() {
        return (
            <View style= { styles.container }>
                <View style= { styles.caixa1 }>
                    <Text>CAIXA1</Text>
                </View>
                <View style= { styles.caixa2 }></View>
                <View style= { styles.caixa3 }></View>
                <View style= { styles.caixa4 }></View>
            </View>
        )
    }
}

export default Aula03;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        borderColor: 'blue',
        borderWidth: 3
    },

    caixa1:{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center', //centraliza horizontal
        alignItems: 'center' // centraliza vertical 
    },

    caixa2:{
        flex: 1,
        backgroundColor: 'green'
    },

    caixa3:{
        flex: 1,
        backgroundColor: 'blue'
    },

    caixa4:{
        flex: 1,
        backgroundColor: 'yellow'
    },
})