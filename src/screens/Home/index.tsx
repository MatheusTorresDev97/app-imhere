import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

const Home = () => {

    const handleParticipantAdd = () => {
        console.log('Você clicou no botão de Adicionar !')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Terça, 12/12/2023</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleParticipantAdd}>
            +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
