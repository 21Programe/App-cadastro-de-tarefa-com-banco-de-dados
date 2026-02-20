import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';



export default class logos extends Component {
    render() {
        return (

            <View style={estilo.menu}>

                <Image style={estilo.imagem} source={require('../imagem/id.jpg')}></Image>
                <Text style={estilo.textoMenu}> ID Websistemas</Text>
            </View>




        )




    }






}

const estilo = StyleSheet.create({
    entradatexto: {
        borderWidth: 1,
        borderColor: 'green',
        width: 300,
        height: 35,
        borderRadius: 10,
        margin: 10,
    },




    imagem: {
        width: 360,
        height: 140
    },
    menu: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    textoMenu: {
        color: 'red',
        fontSize: 30,
        fontWeight: "bold"



    },
    tituloCadastro: {
        color: 'black',
        fontSize: 25,
        fontWeight: "bold"



    },
    button: {
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        width: 150,
        height: 40,
        borderRadius: 10,
        margin: 10,
        fontSize: 30,

    },

}









)
