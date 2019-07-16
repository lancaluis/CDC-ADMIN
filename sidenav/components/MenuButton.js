import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MenuButton extends Component {
    render() {
        return (
            <Icon name="bars" color="#000" size={20} onPress={() => this.props.navigation.toggleDrawer()} 
            style={styles.container} />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        zIndex: 9,
        position: 'absolute',
        top: 0,
        left: 20
    }
})