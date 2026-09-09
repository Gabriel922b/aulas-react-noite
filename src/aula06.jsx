import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';

class Aula06 extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
        nome: 'João',
        sobrenome: '',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-BdzfufHwk2fwYfrZUMI_hLdztXGGnwtA98OyJOxqLg&s=10'
    };
    this.mudarNome = this.mudarNome.bind(this);
    this.mudarImagem = this.mudarImagem.bind(this);
  }

  mudarNome() {
    this.setState({
        nome: 'Ronaldinho Gaúcho',
        sobrenome: 'de Lima'
    })
  }

  mudarImagem() {
      this.setState({
          imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOFMa6DXaR6cbC1qGRAcrwbY8mF_J_oysHUo7PJaRHpca0lE8L8VfUuc&s=10'
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Tempore repellendus, quod earum culpa esse et repellat dolor 
            aut enim officiis est cumque ut eveniet suscipit, optio voluptas? Odit, quam rem!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Tempore repellendus, quod earum culpa esse et repellat dolor 
            aut enim officiis est cumque ut eveniet suscipit, optio voluptas? Odit, quam rem!
          </Text>

          <Text style={{ fontSize: 21, color: 'red', marginTop: 50 }}>
              {this.state.nome} { this.state.sobrenome }
          </Text>

          <Button
          title='Mostrar nome'
          onPress={ this.mudarNome }
          />

          <Image
              source={{ uri: this.state.imagem }}
              style={{ width: 300, height: 300 }}
          />

          <Button
              title='Mudar imagem'
              onPress={ this.mudarImagem }
          />


        </ScrollView>
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
});

//colocar o sobrenome e fazer aparecer no click do button 

export default Aula06;
