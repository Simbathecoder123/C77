import React, { Component } from 'react';
import {Text,
        View,
        StyleSheet,
        SafeAreaView,
        TouchableOpacity,
        Platform,
        StatusBar,
        ImageBackground,
        Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <TouchableOpacity style={styles.button} onPress= {()=>
                        this.props.navigation.navigate("TonightSky")}>
                            <Image source={require('../assets/assets/space.gif')}></Image>
                            <Text>Tonight Sky</Text>
                    </TouchableOpacity>
                <Text style={styles.text}>Home Screen!</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    text:{
        fontSize:30
    }
})