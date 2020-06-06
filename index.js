/**
 * @format
 */

import React from 'react'
import {AppRegistry, Text} from 'react-native';

// import App from './App';
import {name as appName} from './app.json';

const App = () => (
    <Text>Mobile Authentication App</Text>
)

AppRegistry.registerComponent(appName, () => App);
