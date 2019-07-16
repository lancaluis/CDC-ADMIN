import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import MenuButton from '../components/MenuButton';

export default class LinksScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <MenuButton navigation={this.props.navigation} />
                    <Text>Links</Text>
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
