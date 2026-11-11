import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//npx expo install @react-navigation/native @react-navigation/drawer react-native-gesture-handler react-native-reanimated
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

class TelaInicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Inicio</Text>
        <Text>Arraste o dedo da esquerda para a direita 👉🏻</Text>
      </View>
    );
  }
}

//export default TelaInicio; //não precisa no momento pois está na mesma classe 

class TelaPerfil extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Perfil do Usuário</Text>
            </View>
        )
    }
}

export default class Aula12 extends Component{
    render(){
        return(
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Inicio" component={TelaInicio} options={{ title: 'Inicio' }} />
                    <Drawer.Screen name="Perfil" component={TelaPerfil} options={{ title: 'Meu Perfil' }} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

