import React, { Component } from 'react';

import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Tab, Title, Text, Tabs, TabHeading, Left, View, Header, Body } from 'native-base';

import TabsBar from './src/components/TabsBar/TabsBar';

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
      <Container>
        <Header androidStatusBarColor="#573ea8" style={styles.header} hasTabs>
          <Left>
            <Icon name="bars" color="#fff" size={20} style={{marginLeft: 10}}/>
          </Left>
          <Title>Bellamaterna</Title>
        </Header>

        <View style={styles.container}>
          {/* <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Animated.Text style={{ textAlign: 'center', fontSize: 18, color: 'black', marginTop: 28, opacity: headerTitleOpacity }}>Teste</Animated.Text>
          <Animated.Text style={{ textAlign: 'center', fontSize: 32, color: 'black', position: 'absolute', bottom: -3, left: 1, opacity: heroTitleOpacity }}></Animated.Text>
        </Animated.View>

        
        <ScrollView contentContainerStyle={styles.scrollContainer} onScroll={Animated.event([{
          nativeEvent: { contentOffset: { y: this.state.scrollY } }
        }])} scrollEventThrottle={16}> */}

          <TabsBar />

          {/* </ScrollView> */}
        </View>
      </Container>
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
    backgroundColor: '#7159C1',
    alignItems: 'center',
    // position: 'absolute',
    // width: SCREEN_WIDTH,
    // top: 0,
    // left: 0,
    // zIndex: 9999
  },
});