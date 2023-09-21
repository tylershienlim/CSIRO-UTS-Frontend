import React from 'react'
import { SafeAreaView,StyleSheet,StatusBar,Text,TouchableWithoutFeedback} from 'react-native'

const Popup = () => {
    return (
      <>
      <Text style={styles.txt}>Allow</Text>
          <TouchableWithoutFeedback>
            <Text>Allow</Text>
          </TouchableWithoutFeedback>

      </>
    )
}

const styles = StyleSheet.create({
  txt:{
    fontSize: 20,
    color: 'lime',
  }

})

export default Popup;
