import React, { Component } from 'react';

import {
    ActivityIndicator,
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