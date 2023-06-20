import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
      <View style={styles.SignsContainer}>
        <TouchableOpacity style={styles.ContainertextSigns}>
          <Text style={styles.textSigns}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ContainertextSigns}>
          <Text style={styles.textSigns}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ContainertextSigns}>
          <Text style={styles.textSigns}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ContainertextSigns}>
          <Text style={styles.textSigns}>/</Text>
        </TouchableOpacity>
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
      <StatusBar style="hidden" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
  topo: {
    padding: 10,
    borderBottom: 'black',
    borderBottomWidth: 2,
    width: '100%',
  },
  SignsContainer: {
    flexDirection: 'row',
  },
  ContainertextSigns: {
    width: '20%',
  },
  textSigns: {
    fontSize: '2rem',
    textAlign: 'center',
  },
});


