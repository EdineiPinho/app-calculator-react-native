import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Botao = ({ numero, logicaCalculadora, ...props }) => {
  return (
    <View style={styles.btnView}>
      <TouchableOpacity
        style={styles.btnOpacity}
        onPress={() => logicaCalculadora(numero)}>
        <Text style={styles.btnText}>
          {numero}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btnView: {
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    width: '33.3333%',
    height: '25%',
  },
  btnOpacity: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 36,
  }
})

export default Botao