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
  for (var i = 9; i >= 0; i--) {
    numeros.push(i)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="hidden" />
      <View style={styles.topo}>
        <Text style={styles.displayText}>
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
      <View style={styles.numbersView}>
        {
          numeros.map(function (e) {
            return (
              <Botao key={e} numero={e}></Botao>
            )
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
  },
  topo: {
    padding: 10,
    borderBottom: 'white',
    borderBottomWidth: 2,
    width: '100%',
  },
  displayText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'right',
    paddingRight: 12,
  },
  SignsContainer: {
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
  },
  ContainertextSigns: {
    width: '25%',
    borderColor: 'white',
    borderWidth: 1,
  },
  textSigns: {
    fontSize: '2rem',
    textAlign: 'center',
    color: 'white',
  },
  numbersView: {
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap'
  }
});


