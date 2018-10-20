import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// Funcional Component

/*
// Forma normal 
const Line = props => {
    const {label, content} = props;
};
*/

// Forma melhorada quando não preciso usar o props para mais nada. Faço um destructuring no arrow function
const Line = ({label = "", content = ""}) => { // Se vier Undefined 'label' ou 'content' seta para vazio ""
    return (
        <View style={styles.line}>
            <Text style={[styles.cell, styles.label]}>{ label }</Text>
            <Text style={[styles.cell, styles.content]}>{ content }</Text>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        line: {
            flexDirection: 'row',
            paddingTop: 3,
            paddingBottom: 3,
            borderWidth: 1,
            borderColor: '#C5C5C5'
        },
        cell: {
            fontSize: 12,
            paddingLeft: 5
        },
        label:{
            fontWeight: 'bold',
            flex: 2
        },
        content: {
            flex: 5
        }
    }
);

export default Line;