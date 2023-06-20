import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'
import Botao from './Botao';

export default function App() {
  console.disableYellowBox = true;
  const [firstNumber, setFirstNumber] = React.useState('')
  const [secondNumber, setSecondNumber] = React.useState(0)
  const [sinal, setSinal] = React.useState('')
  const [stringCalculo, setStringCalculo] = React.useState('0')

  const numeros = [];
  for (var i = 9; i >= 0; i--) {
    numeros.push(i)
  }

  function logicaCalculadora(n) {
    if (sinal == '') {
      setFirstNumber(parseInt(firstNumber.toString() + n.toString()))
      setStringCalculo(parseInt(parseInt(firstNumber.toString() + n.toString())))
    }
    if ((n === '/' || n === 'x' || n === '-' || n === '+') && secondNumber === 0) {
      setStringCalculo(firstNumber.toString() + n)
      setSinal(n)
    }
    if (sinal != '') {
      setSecondNumber(parseInt(secondNumber.toString() + n.toString()))
      setStringCalculo(firstNumber + sinal + parseInt(secondNumber.toString() + n.toString()))
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topo}>
        <Text style={styles.displayText}>
          {stringCalculo}
        </Text>
      </View>
      <View style={styles.SignsContainer}>
        <TouchableOpacity
          onPress={() => logicaCalculadora('+')}
          style={styles.ContainertextSigns}>
          <Text style={styles.textSigns}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => logicaCalculadora('-')}
          style={styles.ContainertextSigns}>
          <Text style={styles.textSigns}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => logicaCalculadora('*')}
          style={styles.ContainertextSigns}>
          <Text style={styles.textSigns}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => logicaCalculadora('/')}
          style={styles.ContainertextSigns}>
          <Text style={styles.textSigns}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numbersView}>
        {
          numeros.map(function (e) {
            return (
              <Botao
                logicaCalculadora={logicaCalculadora}
                key={e}
                numero={e}
              >

              </Botao>
            )
          })
        }
      </View>
      <View style={styles.equalView}>
        <TouchableOpacity onPress={() => logicaCalculadora('=')} style={styles.equalTouch}>
          <Text style={styles.equalsText}> = </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'black',
    width: '100%',
    borderColor: 'white',
    borderWidth: 1,
    position: 'relative',
  },
  topo: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    borderBottom: 'white',
    borderBottomWidth: 2,
    width: '100%',
    height: '16%',
  },
  displayText: {
    fontSize: 48,
    color: 'white',
    textAlign: 'right',
    paddingRight: 4,
  },
  SignsContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    height: '16%',
  },
  ContainertextSigns: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    height: '100%',
  },
  textSigns: {
    fontSize: 36,
    color: 'white',
    textAlign: 'center',
  },
  numbersView: {
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    height: '64%',
  },
  equalView: {
    position: 'absolute',
    zIndex: 9999,
    right: 0,
    bottom: 0,
    width: '66.666%',
    height: '16%',
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
  },
  equalTouch: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  equalsText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
  }
});


