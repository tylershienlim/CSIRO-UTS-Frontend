import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Threatheader extends React.Component {

        render() {
        return (
           
            <View style = {styles.header}>
                <Text style={styles.textstyle}>Threat Overview</Text>
                <View style = {styles.line}></View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create ({
    header: {
        flex: 1,
        width: '100%',
        height: '15%',
        alignItems: 'left',
        justifyContent: 'left',
        paddingBot: 20,
    },

    line: {
        width: '100%',
        height: '0.2%',
        backgroundColor: "#808080",

    },
    
    textstyle: {
        paddingTop: 50,
        paddingLeft: 60,
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'center', 
        
        
      },

});


