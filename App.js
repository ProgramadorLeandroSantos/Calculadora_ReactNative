import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {

  const [ Result , setResult] = useState('');
  const [ Math , setMath] = useState('');

  function clearData(){
    setMath('');
    setResult('');
  };

  async function result(){
    if(Math === ''){
      return;
    };

    try {
      const cal = await eval(Math);
      setResult(cal);
    } catch (error) {
      Alert.alert('Error','Sua expressão matemática esta incorreta !');
    };
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.displayContainer}>
         <View style={styles.display}>
            <TextInput
              style={styles.textDisplayResult}
              editable={false}
            >{Result}
            </TextInput>
         </View>
        
         <View style={styles.displayMath}>
            <TextInput 
              style={styles.textMath}
              editable={false}
            >{Math}</TextInput>
         </View>
        
         <View style={styles.deleteContainer}>
            <TouchableOpacity
              onPress={()=>{setMath(Math.substr(0,(Math.length - 1)))}}
            >
              <Feather style={styles.deleteContainer} name="delete" size={35} color="#9400D3" />
            </TouchableOpacity>
         </View>
      </View>

      <View style={styles.btnContainer}>
        <View style={styles.btnView}>
             <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{setMath(Math + '(')}}
                
              >
               <Text 
                style={styles.btnNumberText}>(</Text>
             </TouchableOpacity>
             <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{setMath(Math + ')')}}
              >
               <Text style={styles.btnNumberText}>)</Text>
             </TouchableOpacity>
             <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{setMath(Math + '+')}}
              >
               <Text style={styles.btnNumberText}>+</Text>
             </TouchableOpacity>
             <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{setMath(Math + '-')}}
              >
               <Text style={styles.btnNumberText}>-</Text>
             </TouchableOpacity>
        </View>
        <View style={styles.btnView}>
             <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{setMath(Math + '7')}}  
              >
               <Text style={styles.btnNumberText}>7</Text>
             </TouchableOpacity>
             <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{setMath(Math + '8')}}
              >
               <Text style={styles.btnNumberText}>8</Text>
             </TouchableOpacity>
             <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{setMath(Math + '9')}}  
              >
               <Text style={styles.btnNumberText}>9</Text>
             </TouchableOpacity>
             <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{setMath(Math + '*' )}}    
              >
               <Text style={styles.btnNumberText}>X</Text>
             </TouchableOpacity>
        </View>
        <View style={styles.btnView}>
             <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{setMath(Math + '4')}}    
              >
               <Text style={styles.btnNumberText}>4</Text>
             </TouchableOpacity>
             <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{setMath(Math + '5')}}   
              >
               <Text style={styles.btnNumberText}>5</Text>
             </TouchableOpacity>
             <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{setMath(Math + '6')}}   
              >
               <Text style={styles.btnNumberText}>6</Text>
             </TouchableOpacity>
             <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{setMath(Math + '/')}} 
              >
               <Text style={styles.btnNumberText}>/</Text>
             </TouchableOpacity>
        </View>
        <View style={styles.btnView}>
             <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{setMath(Math + '1')}}   
              >
               <Text style={styles.btnNumberText}>1</Text>
             </TouchableOpacity>
             <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{setMath(Math + '2')}}   
              >
               <Text style={styles.btnNumberText}>2</Text>
             </TouchableOpacity>
             <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{setMath(Math + '3')}}     
              >
               <Text style={styles.btnNumberText}>3</Text>
             </TouchableOpacity>
             <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{setMath(Math + '.')}} 
              >
               <Text style={styles.btnNumberText}>.</Text>
             </TouchableOpacity>
        </View>
        <View style={styles.btnView}>
             <TouchableOpacity 
                style={styles.btnClear}
                onPress={()=>{clearData()}}   
              >
               <Text style={styles.btnNumberTextClear}>c</Text>
             </TouchableOpacity>
             <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{setMath(Math + '0')}}   
              >
               <Text style={styles.btnNumberText}>0</Text>
             </TouchableOpacity>
             <TouchableOpacity 
                style={styles.btnResult}
                onPress={()=>{result()}}  
              >
               <Text style={styles.btnNumberText}>=</Text>
             </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    backgroundColor: 'white',
  },

  displayContainer: {
    flex: 1.5,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 25,
  },

  display: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems: 'center',
    width: '100%',
  },

  textDisplayResult: {
    fontSize: 50,
    color: '#9400D3',
  },

  displayMath: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  
  textMath: {
    fontSize: 15,
    color: 'grey',
  },
  
  btnContainer: {
    backgroundColor: '#eee',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  deleteContainer: {
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: 5,
    marginBottom: 4,
  },

  btnView: {
    display: 'flex',
    flexDirection: 'row',
  },

  btn: {
    width: '25%',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnResult: {
    width:'50%',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnClear: {
    width:'25%',
    height: 50,
    backgroundColor: '#9400D3',
    borderWidth: 2,
    borderColor: '#eee',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnNumberText: {
    fontSize: 18,
    color: 'grey',
  },

  btnNumberTextClear:{
    fontSize: 18,
    color: 'white',
  },
});
