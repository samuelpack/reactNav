import React from 'react';
import { Button, StatusBar, Text } from 'react-native';


import { Container } from '../components/Container';

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Text>Welcome to the reactNav_2 directory</Text>
                <Text> Details.js</Text>
                <Button
                    title='go to details...again'
                    onPress={() => this.props.navigation.navigate('Details')} />
                <Button
                    title='go back'
                    onPress={() => this.props.navigation.goBack()} />
            </Container>
        );
    }
}