import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';

class Aula06 extends Component {
    constructor(props) {
      super(props);

      this.state = {
        nome: 'Gabriel', 
        sobrenome: '',
        imagem: 'https://www.rbsdirect.com.br/imagesrc/25518331.jpg?format=webp&w=1600&h=1600&a=c'  
      };
      this.mudarNome = this.mudarNome.bind(this);
      this.mudarImagem = this.mudarImagem.bind(this);
    }
      
      mudarNome() {
        this.setState({
            nome: 'Ronaldinho Gaúcho',
            sobrenome: 'Becker Miguel'
        })
      }
      mudarImagem() {
        this.setState({
          imagem: 'https://conteudo.imguol.com.br/c/esporte/43/2020/08/25/ronaldinho-gaucho-na-chegada-ao-aeroporto-do-galeao-no-rio-de-janeiro-apos-deixar-o-paraguai-1598386479705_v2_1x1.jpg'
        })
      }
    

    render() {
    return (
      <View style={styles.container}>
        <ScrollView>

            <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Culpa, ipsam tempore ullam velit ipsa earum qui libero, 
                 aperiam laborum maiores officiis! Reprehenderit dolore 
                 optio eum iure ex odit a laborum?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Culpa, ipsam tempore ullam velit ipsa earum qui libero, 
                 aperiam laborum maiores officiis! Reprehenderit dolore 
                 optio eum iure ex odit a laborum?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Text>

            <Text style={{ fontSize: 21, color: 'red', marginTop: 50 }}>
                { this.state.nome } { this.state.sobrenome }
            </Text>

              <Button
              title='Mostrar nome'
              onPress={ this.mudarNome }
              />


              <Image
              source={{uri: this.state.imagem }} 
              style={{ width: 300, height: 300}}
              />
               <Button
              title='Mudar Imagem'
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
