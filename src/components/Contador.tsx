 
import React, { useState} from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export const ContadorScreen = () => {
    const [cantidad, setCantidad] = useState(20)
    const handlePlus = () => {
        setCantidad(cantidad + 1)
    }
    const handlePlus2 = () =>{
        setCantidad(cantidad - 1)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {cantidad}
            </Text>

            <TouchableOpacity
             onPress={handlePlus} 
            style={[
                styles.button,
                styles.ringht
            ]}>
                <Text style={styles.textButton}>+1</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={handlePlus2}
             style={[
                 styles.button,
                 styles.length
                 ]}>
                <Text style={styles.textButton}>-1</Text>
            </TouchableOpacity>

        </View>
    )
    


}
export default ContadorScreen
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'coral',
        flex:1,
        justifyContent: 'center',
        alignItems:'center'

    },
    title: {
        fontSize : 40,
        color: 'white'
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 100,
        height: 50,
        width:50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: 'white'
    },
    ringht: {
        position: 'absolute',
        bottom: 20,
        right: 20

    },
    length: {
        position: 'absolute',
        bottom: 20,
        right: 20,

    }
})




