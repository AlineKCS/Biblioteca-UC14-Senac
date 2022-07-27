import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from "react-native";
import Livro from "../Models/Livro";
import DatabaseBiblioteca from "../Database/DatabaseBiblioteca";

export default class Cadastro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Titulo: "",
      Autor: "",
      Ano: "",
      Descricao: "",
      Imagem: ""
    }
  }

  Cadastrar = (Titulo, Autor, Ano, Descricao, Imagem, Status) => {
    const novoLivro = new Livro(Titulo, Autor, Ano, Descricao, Imagem, Status);
    const banco = new DatabaseBiblioteca();
    banco.Adicionar(novoLivro);
  }



  render() {
    return (
      <ScrollView>
        <View style={style.container}>
          <Text style={{ marginVertical: 5 }}>Para cadastrar um livro preencha o formulário abaixo:</Text>
          <Text>Título:</Text>
          <TextInput onChangeText={(valorDigitado) => { this.setState({ Titulo: valorDigitado }) }} style={style.input} />
          <Text>Autor:</Text>
          <TextInput onChangeText={(valorDigitado) => { this.setState({ Autor: valorDigitado }) }} style={style.input} />
          <Text>Ano de lançamento:</Text>
          <TextInput onChangeText={(valorDigitado) => { this.setState({ Ano: valorDigitado }) }} style={style.input} />
          <Text>Descrição:</Text>
          <TextInput onChangeText={(valorDigitado) => { this.setState({ Descricao: valorDigitado }) }} style={style.input} />
          <Text>Imagem:</Text>
          <TextInput onChangeText={(valorDigitado) => { this.setState({ Imagem: valorDigitado }) }} style={style.input} placeholder="Digite a url da imagem" />
          <Button color="#FF8000" onPress={() => this.Cadastrar(this.state.Titulo, this.state.Autor, this.state.Ano, this.state.Descricao, this.state.Imagem, "Pendente")} title="Salvar" />
        </View>
      </ScrollView>
    )
  }
}

const style = StyleSheet.create({
  container: {
    margin: 10
  },

  input: {
    backgroundColor: "#E5E5E5",
    marginVertical: 5
  }

})