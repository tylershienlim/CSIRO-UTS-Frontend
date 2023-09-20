import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
const Container = () => {
      return (
        <View style={styles.container}>
          <Text>Permissions</Text>
          <Image source={require('../assets/lock.png')} style={styles.icon}/>
          <StatusBar style="auto" />
        </View>
      );
     
} 


const styles = StyleSheet.create({
  container: {flex: 1,
  backgroundColor: '#00AFDB',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 20,
  },
  icon: {
    width:484,
    height:484,
    },
});

export default Container