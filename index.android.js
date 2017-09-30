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
  render() {
    return (
      <View style={styles.container}>

         <View>
          <Text style = { styles.descricao}>Busque pelo local desejado: </Text>

         </View> 
      



        <TextInput 
          placeholder = "Digite aqui o local"
          style = { styles.entradaTexto }
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
    marginTop:64,

  },
  entradaTexto: {

    height:80,
    width: 200,
    borderWidth: 1,
    marginBottom: 10,
},
botao: {

  height:36,
  borderWidth: 1,
  backgroundColor: '#8cc53e',
  borderColor: '#8cc53e',
  borderRadius: 6,
  marginBottom:10,

 
},

textoBotao: {
  fontSize:18,
  color:'white',


},

descricao: {
  marginBottom: 18,
  fontSize: 16,
  textAlign: 'center',
  color: 'gray',
  
}


});

AppRegistry.registerComponent('trabalho', () => trabalho);
