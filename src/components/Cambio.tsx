import React, { useState } from 'react'
import {  StyleSheet, Button,Text,TextInput, View } from 'react-native';

export const Cambio = () => {
    const [tipoMoneda, setTipoMoneda] = useState('do')
    const [cambioMoneda, setCambioMoneda] = useState('co')
    const [convertir, setConvertir] = useState(0)
    const [resultado, setResultado] = useState(0)
   

    const handleChangeTipoMOneda = (texto:string)=>{

        setTipoMoneda(texto)
    }

    const handleChangeCambioMoneda = (texto:string)=>{
       
        setCambioMoneda(texto)
    }
    const handleChangeConvertir = (texto:string)=>{
       const numero = parseFloat(texto)
        setConvertir(numero)
    }
    const Calcular = () => {
        if (tipoMoneda === 'do' && cambioMoneda === 'co'){

            const result = convertir * 35.12
            setResultado(result)


        }
        else if (tipoMoneda === 'co' && cambioMoneda == 'do'){

            const result = convertir * 0.028 
            setResultado(result)

        }
        else if (tipoMoneda ==="eu" && cambioMoneda ==="co") {
            const result= convertir * 40.90;
           setResultado(result)
        }

        else if (tipoMoneda ==="eu" && cambioMoneda ==="do") {
          const result= convertir * 1.16;
            setResultado(result)
         }


    }
    return (
        <View>


        <Text>Tipo Moneda</Text>
        <TextInput
        defaultValue={tipoMoneda}
        style={styles.input}
        maxLength={2}
        onChangeText={
            (text) => handleChangeTipoMOneda(text)
        }
        
        />
         <Text>Cambio Moneda</Text>
        <TextInput
        defaultValue={cambioMoneda}
        style={styles.input}
        maxLength={2}
        onChangeText={

            (text) => handleChangeCambioMoneda(text)
        }
        
        />
         <Text>Convertir</Text>
        <TextInput
        defaultValue={convertir.toString()}

        style={styles.input}
        
        onChangeText={

            (text) => handleChangeConvertir(text)
        }
        
        />
         <Text>Resultado</Text>
        <TextInput
        defaultValue={resultado.toString()}
        style={styles.input}
        
        />
        <View style={styles.button}>
        <Button title="Calcular"
        onPress={Calcular}/>

        </View>
       
        </View>
    )
}


const styles = StyleSheet.create({

    button: {

    
    marginTop: '50', 
    backgroundColor: 'blue',
    height: 50,
    width:50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 55,
    position: 'absolute',
    

    },

    input: {
        marginTop: 5,
        width:200,
        borderWidth:2,
        borderRadius: 20,
        paddingHorizontal:30,
        paddingVertical: 20,
        borderColor: 'red'



    }


})
    

    
       

    

