/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import DatabaseBiblioteca from '../Database/DatabaseBiblioteca';
import ListaLivros from '../Components/ListaLivros';

export default class Estante extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dadosBanco: [],
    };
    navigation = this.props.navigation;
    this.Listar();
  }

  Listar = () => {
    const banco = new DatabaseBiblioteca();
    banco.Listar().then(
      dadosBanco => {
        this.setState({ dadosBanco: dadosBanco });
      }
    );
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.dadosBanco}
          renderItem={({ item }) => ListaLivros({ item, navigation })}
          key={({ item }) => item.Id}
          horizontal={false}
        />
      </View>
    );
  }
}
