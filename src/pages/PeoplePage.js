import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

// import Header from '../components/Header';
import PeopleList from '../components/PeopleList';

// Instalei pelo NPM: npm install axios --save
// O '--save' registra no package.json
import axios from 'axios';

export default class PeoplePage extends React.Component {

  constructor(props){
    super(props);

    /* O state é o repositório que todo o Component tem, nele posso setar objetos
    Quando o state(um de seus atributos) é alterado o método render() da classe é chamada para atualizar o componente
    */
    this.state = { 
      peoples: [],
      loading: false,
      error: false, // Criado para verificar se a chamada axios deu erro
      messageError: null
    };
  }

  componentDidMount(){

    this.setState({loading: true});

    // Essa requisição é Assíncrona
    axios.get('https://randomuser.me/api/?nat=br&results=250') // O get retorna uma Promisse
    .then(response => { // O then faz parte do Promises
      const { results } = response.data; // Isso é o Destructurin (desestruturação - muito loko!)

      this.setState({
        peoples: results,
        loading: false
      });
    }).catch(error => {
      // Aqui é bom enviar para um sistema de log de erros, para saber o que anda acontecendo com o app
      this.setState({
        loading: false,
        error: true,
        errorObject: error
      });
    });
  }

  /*
  Um ponto de atenção é que este método só pode retornar 1(um) componente renderizável (vide o error)
  */
  renderLoading() { // Forma simples de mostrar um activityIndicator
    if(this.state.loading)
      return <ActivityIndicator size="large" color="#6ca2f7"/>;
    
      if(this.state.error){
        return (
          <View>
            <Text style={styles.error}>Ops... Algo deu errado =(</Text>
            <Text style={styles.error}>{this.state.errorObject.message}</Text>
          </View>
        )
      }

    return <PeopleList 
    peoples={this.state.peoples} 
    onPressItem={pageParams=>{
      this.props.navigation.navigate('PeopleDetail', pageParams);
    }
  }/>; // O React permite retornar null quando não quero renderizar nada
  }

  render() {
    // this.props.navigation.navigate(/*Chave da página*/, /*state(ou dados)*/)
    // this.props.navigation.navigate('PeopleDetail');

    return (
      <View style={styles.container}>
        { this.renderLoading() } 
        {/*Forma mais correta de imlementar condições de renderização simples*/
         /* this.state.loading 
            ? <ActivityIndicator size="large" color="#6ca2f7"/> 
            : <PeopleList 
                peoples={this.state.peoples} 
                onPressItem={pageParams=>{
                  this.props.navigation.navigate('PeopleDetail', pageParams);
                }
              }/>
          */
        }
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center'
  },
  error:{
    alignSelf: 'center',
    color: '#F00',
    fontSize: 18
  }
});