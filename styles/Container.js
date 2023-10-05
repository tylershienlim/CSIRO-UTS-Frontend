import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
const Container = () => {
      return (
        <View style={styles.container}>
          <Text style={styles.textstyle}>Permissions</Text>
          <StatusBar style="auto" />
          <Image source={require('../assets/lock.png')} style={styles.icon}/>
        </View>
              );
     
} 


const styles = StyleSheet.create({
  container: {flex: 1,
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#00AFDB',
  
  },
  icon: {
    width:'80%',
    height: '50%',
    display: 'flex',
  },
  textstyle: {
    paddingBottom: 50,
    fontSize: 50, 
    fontFamily: 'Arial',
    color: '#fff',
    textAlign: 'auto', 
  },
    
});

export default Container;