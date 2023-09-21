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
    height: '40%',
    display: 'flex',
  },
  textstyle: {
    fontSize: 50, 
    fontFamily: 'AppleSDGothicNeo-Bold',
    color: 'lime',
    textAlign: 'auto', 
  },
    
});

export default Container