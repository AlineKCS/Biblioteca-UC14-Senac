import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { List, Button, Divider } from 'react-native-paper';

export default function ListaLivros({ item, navigation }) {

    return (
        <ScrollView  >
            <List.Item
            
                title={item.Titulo + " - " + item.Autor} 
                description = "Clique para mais detalhes"
                left={props => <List.Icon {...props} icon="book" /> }
                onPress={() => navigation.navigate('Detalhes', { data: item })}
              
            />
           <Divider/>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    dados: {
        width: 200, height: 20,
        marginBottom: 5,

    },
    texto: {
        fontSize: 14,
    },

});

