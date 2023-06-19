import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Botao = ({ numero, ...props }) => {
  return (
    <View>
      <Text>
        {numero}
      </Text>
    </View>
  )
}

export default Botao