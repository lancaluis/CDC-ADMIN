import React, { Component } from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';
import { Content, Card, CardItem, Body, Text } from 'native-base';

export default class Home extends Component {
    render() {
        return (
            <Content style={styles.container}>
                <Card>
                    <Image source={require('../../assets/images/baby.jpeg')} style={styles.image} />
                    <CardItem>
                        <Body>
                            <Text>Eu sou um baby muito cute cute e vc está olhando pra mim</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 350,
        height: 300
    },
    container: {
        padding: 10
    }
});