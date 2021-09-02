import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { View, Text, StyleSheet, } from 'react-native';
import { Button } from 'react-native-elements';


export default function App() { 

  const [isSelected, setSelected] = useState(false);
  const [isCount, setCount] = useState(0);

  return (
    <View style={styles.container}>
       <Text style={styles.titulo}>{isSelected == false ? "Par" : "Impar"}</Text>
     
      <Button        
        title="Clique aqui!"
        buttonStyle={styles.button}
        onPress={() => {
          if(isSelected == true){
            setSelected(false);            
          }else{
           setSelected(true);
          }
          
         setCount(isCount + 1);
        }}
      />

      <Text style={styles.titulo}>{isCount}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: "10%",
    marginBottom: "10%",
    paddingHorizontal: 30,    
    alignItems: 'center',
    justifyContent: 'center',
    
    borderRadius: 10,
  },
  titulo: {
    fontSize: 40,
    color: "#52665A",
  },
});
