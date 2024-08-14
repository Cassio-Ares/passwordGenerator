import { StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard'
//npx expo install expo-clipboard

import useStorage from "../../hooks/useStorage";



interface PropsModal {
    password: string,
    handleClose: () => void
}

export default function ModalPassword({ password, handleClose }: PropsModal) {
    const { saveItem } = useStorage()

    const handleCopy = async () => {
        await Clipboard.setStringAsync(password)
        await saveItem('@pass', password)
        alert("Senha salva com sucesso!")
        handleClose()
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>
                <Pressable
                    style={styles.containerPassword}
                    onLongPress={handleCopy}
                >
                    <Text style={styles.textPassword}>{password}</Text>
                </Pressable>
                <View style={styles.contentBtn}>
                    <TouchableOpacity style={[styles.btn, styles.btnReturn]} onPress={handleClose}>
                        <Text style={[styles.textBtn, styles.btnReturnText]}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, styles.btnSave]} onPress={handleCopy}>
                        <Text style={styles.textBtn}>
                            Salvar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

/**
 *  
 * npx expo install @react-native-async-storage/async-storage
 * 
 * npm install @react-navigation/native
 * npx expo install react-native-screens react-native-safe-area-context
 * npm install @react-navigation/bottom-tabs
 */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(24,24,24, 0.6)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: '#ededed',
        width: '85%',
        paddingBottom: 24,
        paddingTop: 24,
        alignItems: 'center',
        justifyContent: 'center'

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 24
    },
    containerPassword: {
        backgroundColor: '#000',
        width: '90%',
        padding: 14,
        marginBottom: 24,
        borderRadius: 8,
        alignItems: 'center'
    },

    textPassword: {
        color: '#fff',
    },
    contentBtn: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        alignItems: 'center',
        gap: 5
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 2

    },
    btnSave: {
        backgroundColor: '#392de9',
        borderRadius: 8,
    },
    btnReturn: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#392de9'
    },
    textBtn: {
        color: '#fff',
        fontWeight: 'bold'
    },
    btnReturnText: {
        color: '#000'
    }

})