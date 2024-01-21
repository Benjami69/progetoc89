import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {webView}  from "react-native-webview"

export default class StarMapScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Tela do mapa estelar!</Text>
            </View>

            
        )
    }
}