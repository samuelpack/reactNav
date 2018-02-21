import React, { Component } from 'react';
import { Button, Image, StatusBar, Text } from 'react-native';

import { Container } from '../components/Container';
// import { LogoTitle } from '../components/LogoTitle';

class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('../assets/images/logo.png')}
                style={{ width: 50, height: 25 }}
                resizeMode='contain'
            />
        );
    }
}



class Home extends React.Component {
    static navigationOptions = {
        headerTitle: <LogoTitle />,
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

export default Home;