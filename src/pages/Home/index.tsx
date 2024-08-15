import { Image, StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import ModalPassword from "../../components/modal";
import Slider from "@react-native-community/slider";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";


export function Home() {
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState('')
  const [openModal, setOpenModal] = useState(false)
  function generatePassword() {
    const hash = 'abcdefghijklmnopqrstuvwxyzAbCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let password = '';

    for (let i = 0; i < size; i++) {
      let index = Math.floor(Math.random() * hash.length)
      password += hash[index]
    }

    setPasswordValue(password)
    setOpenModal(true)
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleApp}>
        Gerador e cofre de senhas
      </Text>
      <Image
        source={require('../../assets/logoTwo.jpg')}
        style={styles.logo}
      />
      <Text style={styles.titlePass}>
        {size} caracteres
      </Text>
      <View style={styles.area}>
        <Slider
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

      <Modal
        visible={openModal}
        animationType="fade"
        transparent={true}
      >
        <ModalPassword password={passwordValue} handleClose={() => setOpenModal(false)} />
      </Modal>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
    position: 'relative',
    marginTop:35
  },
  titleApp: {
    color: '#fff',
    position: 'absolute',
    top: 90,
    zIndex: 2,
    fontSize: 25,
    fontWeight: 'bold',
  },
  logo: {
    marginBottom: 40,
    marginTop: -30,
    height: '80%',
    width: '100%'
  },
  titlePass: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    zIndex: 2,
    bottom: 230
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
    position: 'absolute',
    zIndex: 2,
    bottom: 120
  },
  btn: {
    width: '80%',
    backgroundColor: '#392de9',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,

  },
  textBtn: {
    color: '#fff',
    fontSize: 20,
  }
})

