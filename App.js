import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
          style={styles.logo}
          source={require('./assets/plinio.jpg')}
      />
      <Text style={styles.titulo}>bem vindo ao Jogo Sr. Jatobá</Text>
      <Button
        onPress={() =>
          Alert.alert("Parabens isso Funciona !!")
        }
        title="Meu Primeiro Botão"
        color="#8433f4"
        accessibilityLabel="Meu Primeiro Botao"
        />
      {/*<StatusBar style="auto" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    color: '#5f5',
  },
  logo: {
    width: 300,
    height: 300,
  },
});
