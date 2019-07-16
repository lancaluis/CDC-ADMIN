import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import DrawerNavigator from './routes/DrawerNavigator';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
