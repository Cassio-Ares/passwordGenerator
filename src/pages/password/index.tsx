import { FlatList, StyleSheet, Text, View } from "react-native";
/**
 * flatList tag similar ao um list + map
 */

import { SafeAreaView } from "react-native-safe-area-context";
/**
 * recurso usados junto ao React navigation
 * 
 *  npx expo install react-native-screens 
 *   
 * screens: melhora responsividade e transições de tela 
 * 
 * 
 * npx expo install react-native-safe-area-context
 * 
 * safe-Area ajusta os recurso na tela levando em considaração areas seguras, bordas arredondadas, ...
 * 
 */


import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";
/**
 * npx expo install @react-native-async-storage/async-storage
 * 
 * recurso que cria um "back-end" na propria memoria do celular para salvar os dados
 */

import PasswordItems from "../../components/passwordItems/PasswordItens";

export function Passwords() {
  const [listPassword, setListPassword] = useState<Array<string>>([]);
  const { getItem, removeItem } = useStorage()

  const focus = useIsFocused()


  useEffect(() => {
    async function loadPassword() {
      const password = await getItem('@pass')
      setListPassword(password)
    }

    loadPassword()
  }, [focus])


  async function handleDelete(item: string) {
    const password = await removeItem('@pass', item)
    if (password !== null && password !== undefined && Array.isArray(password)) {
      setListPassword(password);
    } else {
      setListPassword([]);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Minhas Senhas
        </Text>
      </View>
      <View style={styles.contentList}>
        <FlatList
          style={styles.list}
          data={listPassword}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <PasswordItems data={item} removePassword={() => handleDelete(item)} />}
        />
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(0,20,29)',
    paddingTop: 55,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  contentList: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: '#174f66'
  },
  list: {
    flex: 1,
    paddingTop: 14
  }
})