import React from 'react'
import { SafeAreaView,StyleSheet,Text,TouchableWithoutFeedback, Button} from 'react-native'


const Popup = () => {

    return (
      <>
      <SafeAreaView style={styles.css}>
      <Text style={styles.txt}>Provide access to scan for smishing
     

      </Text>
      
      <Text style={styles.txt1}>
        Enable access to SMS data
      </Text>
      

         <Button title="Enable"  onPress={() => alert('Please continue')}/>
         
           
         
    </SafeAreaView>
      </>
    )
}

const styles = StyleSheet.create({
  txt:{
    fontSize: 22,
    backgroundColor: '#fff',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Arial',
  },

  txt1: {
    fontSize: 18,
    backgroundColor:'#fff',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Arial',
  }



});

export default Popup;
