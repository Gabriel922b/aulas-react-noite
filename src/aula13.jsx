import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

/*interface Item {
    id: String;
    name: String;
}

interface State {
    data: Item[]
}
*/
class Aula13 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [
            {id: 1, name: 'Ana Souza'},
            {id: 2, name: 'Carlos Lima'},
            {id: 3, name: 'Beatriz Silva'}
        ]
    };
  }

  renderItem = ({ item }) => (
    <View style={ styles.item }>
        <Text style={ styles.title }> { item.name }</Text>
    </View>
  )

  render() {
    return (
        <SafeAreaView style={ styles.container }>
            <FlatList
                data={ this.state.data }
                keyExtractor={ (item) => item.id }
                renderItem={ this.renderItem }
            />
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },

  title: {
    fontSize: 18,
  },
});

export default Aula13;
