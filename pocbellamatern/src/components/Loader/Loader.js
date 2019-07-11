import React, { Component } from 'react';

import {
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';

const Loader = () => {
    return (
        <View>
            <ActivityIndicator size="large" color="#00f" />
        </View>
    )
}

export default Loader;