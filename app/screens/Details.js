import React from 'react';
import { Button, StatusBar, Text } from 'react-native';


import { Container } from '../components/Container';

export default class Details extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {
            title: params ? params.otherParam : 'A Nested Details Screen',
        }
    };
    render() {
        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
        const otherParam = params ? params.otherParam : null;

        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Text>Welcome to the reactNav_2 directory</Text>
                <Text> Details.js</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
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