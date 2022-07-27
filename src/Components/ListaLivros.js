import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";



export default function ListaLivros({ item, navigation }) {

    return (
        <ScrollView>
            <View style={style.container}>
                <View><Text style={style.texto}><Icon name="book" size={16} /> {item.Titulo} - {item.Autor}</Text></View>
                <View><TouchableOpacity onPress={() => navigation.navigate("Detalhes", { data: item })}><Text style={{ color: "#F49336" }}>Abrir</Text></TouchableOpacity></View>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15
    },
    dados: {
        width: 200, height: 20,
        marginBottom: 5

    },
    texto: {
        fontSize: 14,
    }

})

