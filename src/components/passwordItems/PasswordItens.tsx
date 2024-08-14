import { Text, View, StyleSheet, Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';


interface Props {
    data: string,
    removePassword: () => void
}

export default function PasswordItems({ data, removePassword }: Props) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.password}>{data}</Text>
            </View>
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