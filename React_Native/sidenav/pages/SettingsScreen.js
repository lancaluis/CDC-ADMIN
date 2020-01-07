import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import MenuButton from '../components/MenuButton';

export default class SettingsScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <MenuButton navigation={this.props.navigation} />
                    <Text>Settings</Text>
                </View>
            </SafeAreaView>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
});
