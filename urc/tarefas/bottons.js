import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';



export default class bottons extends Component {


    constructor(props) {
        super(props)
        this.state = {
            Status: "Disponivel"
        }

    }

    Fazer() {

        this.setState({

            Status: 'concluida'


        })
this.props.Atualizar(this.props.id,"concluido")

    }

    Concluir() {
        this.setState({
            Status: 'em-andamento'


        })
        this.props.Atualizar(this.props.id,"em-andamento")

    }




    render() {
        return (

            <View style={estilo.menu}>
                <View >
                    <Image ></Image>
                    <Text style={estilo.TextoCadastro}> Quantidades de tarefas: {this.props.id}</Text>
                    <Text style={estilo.TextoCadastro}> descricao: {this.props.descricao}</Text>
                    <Text style={estilo.TextoCadastro}> prioridade: {this.props.prioridade}</Text>
                    <Text style={estilo.TextoCadastro}> data: {this.props.data}</Text>
                    <Text style={estilo.TextoCadastro}> Situação: {this.state.Status}</Text>

                </View>
                <View style={estilo.button1}>
                    <TouchableOpacity onPress={() => this.Fazer()} style={estilo.button}>
                        <Text>concluida</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => this.Concluir()} style={estilo.button}>
                        <Text>em andamento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => this.props.Remover(this.props.id)} style={estilo.button}>
                        <Text>Remover</Text>
                    </TouchableOpacity>




                </View>

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
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    textoMenu: {
        color: 'red',
        fontSize: 30,
        fontWeight: "bold"



    },
    TextoCadastro: {
        color: 'black',
        fontSize: 20,
        fontWeight: "bold",
        margin: 3,


    },
    button: {

        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        width: 100,
        height: 30,
        margin: 10,
        fontSize: 30,
        borderRadius: 10,

    },

    button1: {

        flexDirection: 'row',

    },
}









)
