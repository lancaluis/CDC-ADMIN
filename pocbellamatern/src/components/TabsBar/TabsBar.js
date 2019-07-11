import React, { Component } from 'react';
import { Container, Icon, Tab, Text, Tabs, TabHeading, View } from 'native-base';
import Home from '../../pages/Home/Index'

export default class TabsBar extends Component {
    render() {
        return (
            <View>
                <Container>
                    <Tabs>
                        <Tab heading={<TabHeading><Icon type="FontAwesome" name="home" /></TabHeading>}>
                            <Home />
                        </Tab>
                        <Tab heading={<TabHeading><Icon type="FontAwesome" name="bell-o" /></TabHeading>}>
                            <Text>Tab 2</Text>
                        </Tab>
                        <Tab heading={<TabHeading><Icon type="FontAwesome" name="envelope-o" /></TabHeading>}>
                            <Text>Tab 3</Text>
                        </Tab>
                    </Tabs>
                </Container>
            </View>
        )
    }
}