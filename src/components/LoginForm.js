import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input, Spinner } from './common'

class LoginForm extends Component {
    state = { 
        email: '',
        passord: '',
        error: '',
        Loading: false
    }

    onButtonPress() {
        const { email, passord } = this.state

        this.setState({error:'', Loading: true})

        firebase.auth().signInWithEmailAndPassword(email, passord)
        .then(this.onLoginSuccess.bind())
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, passord)
            .then(this.onLoginSuccess.bind())
            // .catch(this.onLoginFail.bind())
            .catch(() => {
                this.setState({ 
                    Loading: false, 
                    error: 'Authentication Failed'
                })
            }

            )
        })
    }

    onLoginFail() {
        this.setState({ 
            error: 'Authentication Failed',
            loading: false 
        });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            Loading: false,
            error: ''
        })
    }

    renderButton () {
        if(this.state.Loading) {
            return <Spinner size='small' />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    label='Email'
                    placeholder = 'email@gmail.com'
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                    secureTextEntry
                    label='Password'
                    placeholder = 'password'
                    value={this.state.passord}
                    onChangeText={passord => this.setState({passord})}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles ={
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}



export default LoginForm
