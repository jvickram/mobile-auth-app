import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

    componentDidMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBL7T--vapyq5G8rlHB2zWKL4Z08gS9BQo",
            authDomain: "mobileauth-fc6d8.firebaseapp.com",
            databaseURL: "https://mobileauth-fc6d8.firebaseio.com",
            projectId: "mobileauth-fc6d8",
            storageBucket: "mobileauth-fc6d8.appspot.com",
            messagingSenderId: "246606219690",
            appId: "1:246606219690:web:0f4c86a724e5043df103d3",
            measurementId: "G-QVGP5HDN64"
          });

        // Whether the user is signed in
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              this.setState({ loggedIn: true });
            } else {
              this.setState({ loggedIn: false });
            }
          });
        }
      
        renderContent() {
          switch (this.state.loggedIn) {
            case true:
              return (
                <CardSection>
                  <Button 
                      onPress={() => firebase.auth().signOut()
                  }>
                    Log Out
                  </Button>
                </CardSection>
              );
            case false:
              return <LoginForm />;
            default:
              return (
                <CardSection>
                  <Spinner size="large" />
                </CardSection>
              )
          }
        }
      
        render() {
          return (
            <View>
              <Header headerText="Authentication" />
              {this.renderContent()}
            </View>
          );
        }
      }
      
      export default App;
      