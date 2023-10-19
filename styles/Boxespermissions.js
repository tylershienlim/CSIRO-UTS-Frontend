import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

 export default class Boxespermissions extends React.Component {
    render() {    
        return (
            
          <View style = {styles.container}>

                    <Text style = {styles.textstyle}>SMS Alerts</Text>
                    <Text style = {styles.textstyle2}> Receive updates on SMS attacks</Text>

                <View style={styles.box1}>
                    <View style={styles.inner}>
                     <Text style={styles.textstyle1}>Push Notifications
                     
                   

                     </Text>
                   
                </View>
            </View>

                    <Text style = {styles.textstyle3}>Block Numbers</Text>
                    <Text style = {styles.textstyle2}> Block all SMS detected as smishing, excepted for numbers in the whitelist</Text>

            <View style={styles.box2}>
                    <View style={styles.inner}>
                     <Text style = {styles.textstyle1}>Block All 
                     
                     
                    

                     </Text>
                    
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
        width: '105%',
        height: '10%',
        borderTopColor: 'black',
       paddingBottom: 5,
    },

    box2: {
        width: '105%',
        height: '10%',
    },

    inner: {
        flex: 1,
        backgroundColor: "#eee",
        alignItems: 'center',
        justifyContent: 'center'
    },

    textstyle: {
        fontSize: 20, 
        paddingRight: 100,
        paddingBottom: 10,
        paddingLeft: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
    },

    textstyle1: {
        fontSize: 18, 
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    
    textstyle2: {
        fontSize: 15, 
        paddingBottom: 30,
        paddingLeft: 10,
    },

    textstyle3: {
        fontSize: 20, 
        paddingTop: 40,
        paddingRight: 100,
        paddingBottom: 10,
        paddingLeft: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});

