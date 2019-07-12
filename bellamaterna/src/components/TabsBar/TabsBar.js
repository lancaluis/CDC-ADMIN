import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Tab, Text, Tabs, TabHeading, View } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../../pages/Home/Index';
import Loader from '../Loader/Loader';

export default class TabsBar extends Component {
    render() {
        return (
            <View>
                <Container>
                    <Tabs style={styles.tabs}>
                        <Tab heading={<TabHeading style={styles.tabHeading}><Icon name="movie" color="#fff" size={20} /></TabHeading>}>
                            <Home />
                        </Tab>
                        <Tab heading={<TabHeading style={styles.tabHeading}><Icon name="user" color="#fff" size={20} /></TabHeading>}>
                            <Loader />
                        </Tab>
                        <Tab heading={<TabHeading style={styles.tabHeading}><Icon name="clone" color="#fff" size={20} /></TabHeading>}>
                            <Text>Tab 3</Text>
                        </Tab>
                    </Tabs>
                </Container>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    tabs: {
        backgroundColor: '#7159C1'
    },
    tabHeading: {
        backgroundColor: '#7159C1',
        // opacity: 0
    }
});