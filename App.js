import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={top.container}>
        <Image
          source={require('./assets/csiro-logo.png')}
          style={top.image}
        />
        <Text style={top.text}> 
          Protect Your Data
        </Text>
      </View>
      <View style={middle.container} >
      </View>
      <View style={bottom.container}>
        <View style={bottom.buttonCover}>
          <Button 
            title="Get Started"
            color="white"
            onPress={() => Alert.alert("Get Started Pressed")}
            style={bottom.button}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const top = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 2,
  },
  image: {
    height: 112.5,
    position: "relative",
    width: 112.5,
    margin: 25,
  },
  text: {
    color: "rgb(0, 175, 219)",
    fontSize: 25,
  },
})

const middle = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    height: 54,
    width: '100%',
    margin: 25,
    borderWidth: 2,
  }
})

const bottom = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 294,
    width: 390,
    borderWidth: 2,
  },
  buttonCover: {
    backgroundColor: "rgb(0, 175, 219)",
    borderRadius: 20,
  },
  button: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    padding: 0,
    position: "relative",
  }
})