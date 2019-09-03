import React, { Component } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default class App extends Component {

  state = {
    error: false,
    email: '',
    senha: ''
  }

  logIn = () => {
    const { email, senha } = this.state;
    if (email === 'Batatinha@teste.com' && senha === 'Pizza') {
      console.warn('Fez o Login')
      this.setState({ error: false })
    } else {
      this.setState({ error: true })
    }
  }

  render() {
    const { error } = this.state;

    return (

      <SafeAreaView style={styles.container}>

        <Text style={styles.logo}>Fome Z E R O</Text>

        <TextInput
          placeholder="E-mail"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => this.setState({ email: text })}
          placeholderTextColor="#2b2b2b"
          keyboardType="email-address"
          style={styles.input}
        />
        {error && <Text style={styles.error}>E-mail inválido</Text>}

        <TextInput
          placeholder="Senha"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={text => this.setState({ senha: text })}
          placeholderTextColor="#2b2b2b"
          style={styles.input}
        />
        {error && <Text style={styles.error}>Senha inválida</Text>}

        <TouchableOpacity onPress={this.logIn} style={styles.btn}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>

      </SafeAreaView >

    )
  }
}