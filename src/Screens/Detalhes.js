import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import DatabaseBiblioteca from '../Database/DatabaseBiblioteca';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';




export default function Detalhes({ route }) {

    const { data } = route.params;

    MarcarComoLido = (id) => {
        const banco = new DatabaseBiblioteca();
        banco.Concluir(id);
    }



    Excluir = (id) => {
        const banco = new DatabaseBiblioteca();
        banco.Excluir(id);
    }

    const getStyle = () => {
        if (data.Status == "Pendente") {
            return { color: "#FF8000" }
        }
        else {
            return { color: "#058105" }
        }
    }
    const LeftContent = props => <Avatar.Icon {...props} icon="book" style={getStyle()} />

    return (

        <ScrollView>

            
         
            <Card>

                <Card.Title title={data.Titulo} subtitle={data.Autor} left={LeftContent} />
                <Card.Content>
                  
                </Card.Content>
                <Card.Cover source={{ uri: data.Imagem }}  />
                <Card.Actions>
                    <Button  onPress={() => { MarcarComoLido(data.Id) }} >Marcar Como Lido</Button>
                    <Button onPress={() => { Excluir(data.Id) }}>Excluir</Button>
                </Card.Actions>
            </Card>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },

    titulo: {
        margin: 10,
        fontSize: 20
    },

    imagem: {
        width: 120, height: 200,
        margin: 10,
        borderRadius: 5
    },

    botoes: {
        width: 140,
        height: 30,
        margin: 5,
        marginLeft: 0,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    }
})