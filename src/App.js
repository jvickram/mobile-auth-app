import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {

    componentDidMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDc7sffRP7p_QBQqnF2ILth_E6uqWQgZkY",
            authDomain: "auth-b44f6.firebaseapp.com",
            databaseURL: "https://auth-b44f6.firebaseio.com",
            projectId: "auth-b44f6",
            storageBucket: "auth-b44f6.appspot.com",
            messagingSenderId: "27312322434",
            appId: "1:27312322434:web:ebdf62e01c589d38bb419b",
            measurementId: "G-JGRYXM2K0C"
          })

    }
    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <LoginForm />
            </View>
        )
    }
}

export default App