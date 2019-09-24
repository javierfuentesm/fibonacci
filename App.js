import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  isFibonacci = number => {
    var sqRootOf5 = Math.sqrt(5);

    var Phi = (1+sqRootOf5)/2;
    var phi = (1-sqRootOf5)/2

    return  this.setState({text: Math.round((Math.pow(Phi, number) - Math.pow(phi, number)) / sqRootOf5)});
 
  };

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Escribe aqui el numero que deseas saber si es primo"
          onChangeText={text => this.isFibonacci(text)}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>{this.state.text}</Text>
      </View>
    );
  }
}
