import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// Stateless component
const Header = (props) => (
    <View style={style.container}>
        <Text style={style.title}>{props.title}</Text>
    </View>
);

/* Stylesheet */
const style = StyleSheet.create({ 
    container: {
        marginTop: 25,
        backgroundColor: '#6ca2f7',
    
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        color: '#fff',
    }
});


export default Header;