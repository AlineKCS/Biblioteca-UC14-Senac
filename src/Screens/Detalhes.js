import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import DatabaseBiblioteca from '../Database/DatabaseBiblioteca';

export default function Detalhes({ route }) {

    const { data } = route.params;

    MarcarComoLido = (id) => {
        const banco = new DatabaseBiblioteca();
        banco.Concluir(id);
    }

    const getEstilo = () => {
        if (data.Status == "Pendente") {
            return { color: "#FF8000" }
        }
        else {
            return { color: "#058105" }
        }
    }

    Excluir = (id) => {
        const banco = new DatabaseBiblioteca();
        banco.Excluir(id);
    }

    return (

        <ScrollView>

            <View style={{ borderWidth: 1, margin: 10, color: "gray", borderRadius: 10 }}>

                <View style={{ margin: 15, marginBottom: 0 }}>
                    <Text style={[{ textAlign: "left", fontSize: 16 }, getEstilo()]}><Icon name="book" size={20} />  {data.Status}</Text>
                </View>

                <View style={style.container}>

                    <Text style={style.titulo}>{data.Titulo} - {data.Autor}</Text>
                    <Image style={style.imagem} source={{ uri: data.Imagem }} />
                    <Text style={{ margin: 10 }}>Ano de Lançamento: {data.Ano}</Text>
                    <Text style={{ margin: 10, textAlign: "justify" }}>{data.Descricao}</Text>

                    <View style={{ flex: 1, justifyContent: "space-evenly", flexDirection: "row" }}>
                        <TouchableOpacity style={[style.botoes, { backgroundColor: "#FF8000" }]} onPress={() => { MarcarComoLido(data.Id) }}>
                            <Text style={{ color: "white", fontWeight: "bold" }}>Marcar Como Lido</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.botoes, { backgroundColor: "#F49336" }]} onPress={() => { Excluir(data.Id) }}>
                            <Text style={{ color: "white", fontWeight: "bold" }}>Excluir</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
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