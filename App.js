import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export function App() {
  const[img, setImg] = useState(require('./src/biscoito.png'));
  const[textoFrase, setTextoFrase] = useState('');

  let frases = [
    'A vida trará coisas boas se tiver paciência',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Aquele que se importa com o sentimento dos outros, não é um tolo.'
  ];

  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random()*frases.length)
    
    setTextoFrase(' "'+ frases[numeroAleatorio] + '"');
    setImg(require('./src/biscoitoAberto.png'));
  };

  function reiniciarBiscoito(){
    setTextoFrase('');
    setImg(require('./src/biscoito.png'))
  };


  return (
    <View style={styles.container}>
      <Image
      source={img}
      style={styles.img}
      />
      
      <Text style={styles.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop:15, borderColor:'#121212'}]} onPress={reiniciarBiscoito}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color:'#121212'}]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  img:{
    width:230,
    height:230
  },
  textoFrase:{
    fontSize:20,
    color: '#dd7b22',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'
  },
  botao:{
    width:230,
    height:50,
    borderColor:'#dd7b22',
    borderWidth:2,
    borderRadius:25
  },
  btnArea:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  btnTexto:{
    fontSize:17,
    fontWeight:'bold',
    color:'#dd7b22'
  }
})

export default App;