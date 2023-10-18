import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

 export default class Boxespermissions extends React.Component {
    render() {    
        return (
            
          <View style = {styles.container}>

                <View style={styles.box1}>
                    <View style={styles.inner}>
                     <Text style={styles.textstyle}>Push notifications</Text>

                </View>
            </View>

            <View style={styles.box2}>
                    <View style={styles.inner}>
                     <Text style = {styles.textstyle}>block all</Text>
                     
                </View>
            </View>
        
        </View>

        );
    }
 }

const styles = StyleSheet.create ({

    container: {
        width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        
        
    },

    line: {
        
        width: '100%',
        height: '0.3%',
        backgroundColor: "#808080",

    },

    box1: {
        width: '100%',
        height: '15%',
       paddingBottom: 5,
    },

    box2: {
        width: '100%',
        height: '15%',
    },

    inner: {
        flex: 1,
        backgroundColor: "#eee",
        alignItems: 'center',
        justifyContent: 'center'
    },

    textstyle: {
        fontSize: 20, 
        
    },

});

