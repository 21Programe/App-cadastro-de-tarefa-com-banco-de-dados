import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Menu from './urc/tarefas/logos';
import Veiculos from './urc/tarefas/bottons';
import Carro from './urc/tarefas/tarefa';
import Crud from './urc/banco/crud_nr';

export default class app extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prioridade: "",
      descricao: "",
      data: 0,
      status: "Disponivel",
      lista: []
    }
    this.Listar()
  }

  Listar = () => {
    const banco = new Crud();
    banco.Listar().then(
      listaCompleta => {
        this.setState({ lista: listaCompleta })


      }

    )

  }


  inserir = (descricao, prioridade, data, Status) => {
    const novatarefa = new Carro(descricao, prioridade, data, Status)
    const banco = new Crud();
    banco.Inserir(novatarefa);
    this.Listar();

  }

  Remover = (id) => {

    const banco = new Crud();
    banco.Remover(id);
    this.Listar();


  }


  Atualizar = (id, status) => {
    const banco = new Crud();
    banco.Atualizar(id, status);
    this.Listar();



  }



  render() {
    return (
      <ScrollView>
        <View style={estilo.menu}>
          <View style={estilo.menu} >

          </View>

          <View style={estilo.menu}>
            <Menu></Menu>

            <Text style={estilo.tituloCadastro}> Cadastro de tarefa</Text>



            <TextInput onChangeText={(valor) => { this.setState({ descricao: valor }) }} style={estilo.entradatexto} placeholder='Digite a descrição ' />
            <TextInput onChangeText={(valor) => { this.setState({ data: valor }) }} style={estilo.entradatexto} placeholder='Digite a data de termino' />
            <TextInput onChangeText={(valor) => { this.setState({ prioridade: valor }) }} style={estilo.entradatexto} placeholder='prioridade' />

          </View>

          <View style={estilo.menu}>

            <TouchableOpacity onPress={() => this.inserir( this.state.descricao, this.state.data, this.state.prioridade, this.state.status)} >
              <Text style={estilo.button}> Cadastrar</Text>
            </TouchableOpacity>
          </View>
          <Text style={estilo.tituloCadastro}> Lista de tarefa</Text>

          {
            this.state.lista.map(
              l => (
                <Veiculos
                  l={l}
                  id={l.id}
                  descricao={l.descricao}
                  data={l.data}
                  prioridade={l.prioridade}
                  Status="Disponivel"
                  Remover={this.Remover}
                  Atualizar={this.Atualizar}

                />
              )
            )
          }

        </View>
      </ScrollView>

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
