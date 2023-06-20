import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Botao = ({ numero, ...props }) => {
  return (
    <View style={styles.btnView}>
      <Text style={styles.btnText}>
        {numero}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  btnView: {
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    width: '33.3333%',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  }
})

export default Botao