import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React from 'react'
import Botao from './Botao';

export default function App() {
  console.disableYellowBox = true;
  const [firstNumber, setFirstNumber] = React.useState()
  const [secondNumber, setSecondNumber] = React.useState()
  const [sinal, setSinal] = React.useState('')
  const [stringCalculo, setStringCalculo] = React.useState('0')

  const numeros = [];
  for (var i = 0; i <= 9; i++) {
    numeros.push(i)
  }

  return (
    <View sytle={styles.container}>
      <View style={styles.topo}>
        <Text style={{ fontSize: 24 }}>
          {stringCalculo}
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableHighlight style={styles.ContainertextSigns}>
          <Text style={styles.textSigns}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.ContainertextSigns}>
          <Text style={styles.textSigns}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.ContainertextSigns}>
          <Text style={styles.textSigns}>x</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.ContainertextSigns}>
          <Text style={styles.textSigns}>/</Text>
        </TouchableHighlight>
      </View>
      <View>
        {
          numeros.map(function (e) {
            return (
              <Botao key={e} numero={e}></Botao>
            )
          })
        }
      </View>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    display: 'flex',
  },
  topo: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    borderBottom: 'black',
    borderBottomWidth: 2,
    width: '100%',
  },
  ContainertextSigns: {
    width: '25%',
  },
  textSigns: {
    fontSize: '2rem',
    textAlign: 'center',
  },
});
