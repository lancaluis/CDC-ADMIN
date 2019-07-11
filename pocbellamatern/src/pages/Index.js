import React, { Component } from 'react';

import {
    Animated,
    Dimensions,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';

import TabsBar from '../components/TabsBar/TabsBar'

const HEADER_EXPANDED_HEIGHT = 245;
const HEADER_COLLAPSED_HEIGHT = 90;
const { width: SCREEN_WIDTH } = Dimensions.get("screen")

export default class App extends Component {

    state = {
        scrollY: new Animated.Value(0)
    }

    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
            outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
            extrapolate: 'clamp'
        });
        const headerTitleOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        });
        const heroTitleOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        });

        return (
            <View style={styles.container}>

                <Animated.View style={[styles.header, { height: headerHeight }]}>
                    <Animated.Text style={{ textAlign: 'center', fontSize: 18, color: 'black', marginTop: 28, opacity: headerTitleOpacity }}>Teste</Animated.Text>
                    <Animated.Text style={{ textAlign: 'center', fontSize: 32, color: 'black', position: 'absolute', bottom: -3, left: 1, opacity: heroTitleOpacity }}></Animated.Text>
                </Animated.View>

                <ScrollView contentContainerStyle={styles.scrollContainer} onScroll={Animated.event([{
                    nativeEvent: { contentOffset: { y: this.state.scrollY } }
                }])} scrollEventThrottle={16}>

                    <TabsBar />

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollContainer: {
        paddingTop: HEADER_EXPANDED_HEIGHT
    },
    header: {
        backgroundColor: 'lightblue',
        position: 'absolute',
        width: SCREEN_WIDTH,
        top: 0,
        left: 0,
        zIndex: 9999
    },
});