import { Text, View, StyleSheet, Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import * as Clipboard from 'expo-clipboard'

interface Props {
    data: string,
    removePassword: () => void
}

export default function PasswordItems({ data, removePassword }: Props) {
    const handleCopy = async () =>{
      await Clipboard.setStringAsync(data)
    }
    
    return (
        <View style={styles.container}>
            <Pressable onPress={handleCopy}>
                <Text style={styles.password}>{data}</Text>
            </Pressable>
            <Pressable onPress={removePassword}>
                <AntDesign name="delete" size={20} color="white" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
   flexDirection:'row',
   justifyContent: 'space-between',
   backgroundColor:'#0e0e0e',
   padding: 10,
   width: '100%',
   marginBottom: 14,
   borderRadius: 8
  },
  password:{
    color: '#fff',
    fontWeight:'bold'
  }
})