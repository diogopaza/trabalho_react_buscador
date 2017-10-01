/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,

} from 'react-native';

export default class trabalho extends Component {
  
  
  constructor(props){

    super(props);

    this.state = {

      stringPesquisa : ''

    }


  }



  
  render() {
    return (
      <View style={styles.container}>

         <View>
          <Text style = { styles.descricao}>Busque pelo local desejado: </Text>

         </View> 
      



        <TextInput 
          placeholder = "Digite aqui o local"
          style = { styles.entradaTexto }
          value = { this.state.stringPesquisa }
          
      />

      <TouchableHighlight
        style = { styles.botao }
      >
        <Text style = { styles.textoBotao} >BUSCAR</Text>

      </TouchableHighlight>  
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding:28,

  },
  entradaTexto: {
   
    height:36,
    padding: 4,
    marginBottom: 10,
    alignSelf: 'stretch',
    fontSize: 14,
    color: '#8cc53e',
},
botao: {

  height:36,
  borderWidth: 1,
  backgroundColor: '#8cc53e',
  borderColor: '#8cc53e',
  borderRadius: 6,
  marginBottom:10,
  alignSelf: 'stretch',


 
},

textoBotao: {
  fontSize:18,
  color:'white',
  alignSelf: 'center',
  marginTop: 4,
 


},

descricao: {
  marginBottom: 12,
  fontSize: 16,
  textAlign: 'center',
  color: 'gray',
  
}


});

AppRegistry.registerComponent('trabalho', () => trabalho);
