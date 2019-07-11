import React, { Component } from 'react';
import { View } from 'react-native';

// Conteúdo do Menu
const ContentView = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to React Native!
          </Text>
            <Text style={styles.instructions}>
                To get started, edit index.ios.js
          </Text>
            <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
                Cmd+Control+Z for dev menu
          </Text>
        </View>
    );
}

// Menu
export default class App extends Component {
    render() {
        const menu = <Menu navigator={navigator} />;
        return (
            <SideMenu menu={menu}>
                <ContentView />
            </SideMenu>
        );
    }
}