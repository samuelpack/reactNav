import React, { Component } from 'react';
import { Button, StatusBar, Text } from 'react-native';


import { Container } from '../components/Container';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Text>Welcome to the reactNav_2 directory</Text>
                <Text> Home.js</Text>
                <Button
                    title='go to details'
                    onPress={() => {
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}
                />
            </Container>

        );
    }
}

