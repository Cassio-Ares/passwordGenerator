import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"; 
//tags do reactNative ex: Image source = img src ; View = div ...

import Slider from "@react-native-community/slider";
/**
 * slider instalado como recurso do expo:
 * 
 * npx expo install @react-native-community/slider
 */

import { useState } from "react";

export default function App() {
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState('')

/**
 * funçao que recebe size para iterar no for para criar um password
 */
  function generatePassword() {
    const hash = 'abcdefghijklmnopqrstuvwxyzAbCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let password = '';

    for (let i = 0; i < size; i++) {
      let index = Math.floor(Math.random() * hash.length)
      password += hash[index]
    }

    setPasswordValue(password)
  }


  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/logo.png')} // source da Image com require para buscar a imagem
        style={styles.logo}
      />
      <Text style={styles.title}>
        {size} caracteres
      </Text>
      <View style={styles.area}>
        <Slider                        //Slider com suas propriedades 
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value) => setSize(parseFloat(value.toFixed(0)))}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={generatePassword}> 
        <Text style={styles.textBtn}>
          Gerar Senha
        </Text>
      </TouchableOpacity>
    </View>
  )
}

/**
 *  TouchableOpacity === button  onPress = OnClick
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#acabab'
  },
  logo: {
    marginBottom: 40,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  area: {
    marginTop: 14,
    marginBottom: 18,
    width: '80%',
    backgroundColor: '#c9c2c2',
    borderRadius: 8,
    padding: 8,
    // Sombras para iOS
    shadowColor: '#0c0b0b',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Sombras para Android
    elevation: 10,
  },
  btn: {
    width: '80%',
    backgroundColor: '#392de9',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 14,
  },
  textBtn: {
    color: '#fff',
    fontSize: 20,
  }
})

