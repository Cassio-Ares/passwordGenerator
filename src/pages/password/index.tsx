import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useState, useEffect} from "react";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";
import PasswordItems from "../../components/passwordItems/PasswordItens";

export function Passwords(){
const [listPassword, setListPassword] = useState<Array<string>>([]);
const {getItem, removeItem} = useStorage()

const focus = useIsFocused()


useEffect(() => {
  async function loadPassword() {
    const password = await getItem('@pass')
    setListPassword(password)
  }

  loadPassword()
}, [focus])


async function handleDelete (item:string){
  const password = await removeItem('@pass', item)
  if (password !== null && password !== undefined && Array.isArray(password)) {
    setListPassword(password);
  } else {
    setListPassword([]);
  }
}

useIsFocused
    return(
        <SafeAreaView style={{flex: 1}}>
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
                 renderItem={({item})=> <PasswordItems data={item} removePassword={() => handleDelete(item)} />}
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    header:{
        backgroundColor:'#392de9',
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight:14,
    },
    title:{
        fontSize: 18,
        color: '#fff',
        fontWeight:'bold'
    },
    contentList:{
      flex: 1,
      paddingLeft: 14,
      paddingRight:14,
    },
    list:{
      flex:1,
      paddingTop: 14
    }
})