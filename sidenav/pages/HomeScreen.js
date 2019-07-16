import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView
} from 'react-native';

import MenuButton from '../components/MenuButton';

export default class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <MenuButton navigation={this.props.navigation} />
                    <Text>HOME</Text>
                </View>
            </SafeAreaView>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});
