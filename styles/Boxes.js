import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

 export default class Boxes extends React.Component {
    render() {    
        return (
            
          <View style = {styles.container}>

                <View style={styles.box1}>
                    <View style={styles.inner1}>
                     <Text style={styles.textstyle}>Most Recent Attack</Text>

                    <Text>
                    {"\n"} "Your package with DHL       2 minutes ago
                    {"\n"} could not be delivered..."
                    
                    </Text>

                    <Text>

                    <Button title="Accept" onPress={() => alert('Accepted')}/>
                    <Button title="Reject" onPress={() => alert('Rejected')}/>

                    </Text>

                </View>
            </View>

            <View style={styles.box2}>
                    <View style={styles.inner2}>
                     <Text style = {styles.textstyle}>Security Status</Text>

                     <Image source={require('../assets/icon.png')} style={styles.icon}/>
                     <View style = {styles.line}></View>
                     <Text style= {styles.textstyle1}>12 attack attempts detected</Text>
                </View>
            </View>

            <View style={styles.box3}>
                    <View style={styles.inner3}>
                     <Text style = {styles.textstyle2}>Detected 
                     {"\n"}Messages</Text>
                     <View style = {styles.line}></View>
                     <Text style = {styles.number}>12</Text>
                     
                 <Text style = {styles.textstyle2}>Messages to review</Text>

                </View>
            </View>

            <View style={styles.box4}>
                    <View style={styles.inner4}>
                     <Text style = {styles.textstyle4}>Manage Blocked Numbers</Text>
                </View>
            </View>

            <View style={styles.box5}>
                    <View style={styles.inner5}>
                     <Text style = {styles.textstyle5}>Report a Suspicious Activity</Text>
                </View>
            </View>

            <View style={styles.box6}>
                    <View style={styles.inner}>
                     <Text style = {styles.textstyle}>Manage Permissions</Text>
                </View>
            </View>

            <View style={styles.box7}>
                    <View style={styles.inner}>
                     <Text style = {styles.textstyle}>Threat Overview</Text>
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
        height: '20%',
        padding: 5,
       
    },

    box2: {
        width: '50%',
        height: '35%',
        padding: 5,
       
        
    },

    box3: {
        width: '50%',
        height: '35%',
        padding: 5,
        
    
    },

    box4: {
        width: '50%',
        height: '20%',
        padding: 5,

    },

    box5: {
        width: '50%',
        height: '20%',
        padding: 5,

    },

    box6: {
        width: '100%',
        height: '12%',
        padding: 5,

    },

    box7: {
        width: '100%',
        height: '12%',
        padding: 5,

    },


    inner: {
        flex: 1,
        backgroundColor: "#eee",
        alignItems: 'center',
        justifyContent: 'center'
    },

    inner1: {
        flex: 1,
        backgroundColor: "#ADD8E6",
        alignItems: 'center',
        justifyContent: 'center'
    },

    inner2: {
        flex: 1,
        paddingTop: 15,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#eee",
        
    },

    inner3: {
        flex: 1,
        paddingTop: 15,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#eee",
        
    },

    inner4: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#eee",
        
    },

    inner5: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#eee",
        
    },

    icon: {
        width:'50%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',

    },

    number: {
        fontSize: 60,
        color: "#00AFDB",
    },

   

    textstyle: {
        fontSize: 20, 
        
    },

    textstyle1: {
        fontSize: 15,
        alignItems: 'center',
        paddingTop: 20,
    },

    textstyle2: {
        fontSize: 20,
        alignItems: 'center',
        paddingBottom: 20,
    },

    textstyle4: {
        fontSize: 16, 
        alignItems: 'center',
        paddingTop: 25,
    },

    textstyle5: {
        fontSize: 16, 
        alignItems: 'center',
        paddingTop: 25,
    },

});

