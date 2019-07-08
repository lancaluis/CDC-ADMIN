import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  Dimensions,
  View,
  FlatList,
  StyleSheet
} from 'react-native';

import Post from './src/components/Post'

const width = Dimensions.get('screen').width;

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(resposta => resposta.json())
      .then(json => this.setState({fotos: json}))
  }

  render() {

    return (
      <SafeAreaView>

        <FlatList
          keyExtractor={item => String(item.id)}
          data={this.state.fotos}
          renderItem={({ item }) =>
            <Post foto={ item }/>
          }
        />

      </SafeAreaView >
    );

  }
}

const styles = StyleSheet.create({
  cabecalho: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  fotoDePerfil: {
    marginRight: 10,
    borderRadius: 20,
    width: 40,
    height: 40
  },
  foto: {
    width,
    height: width
  }
});
