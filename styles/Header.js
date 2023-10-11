import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {

        render() {
        return (
           
            <View style = {styles.header}>
                <Text style={styles.textstyle}>Overview</Text>
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
        height: '2%',
        backgroundColor: "#808080",

    },
    
    textstyle: {
        paddingTop: 50,
        paddingLeft: 20,
        fontSize: 40, 
        
        
      },

});


