import { Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";

import { styles } from "./styles";
import Participant from "../../components/Participant";

const Home = () => {
  const participants = ['Matheus', 'Roberto', 'Lima', 'Torres', 'Uolace', 'Matheuss', 'Zé', 'Zezinho', 'Arrascaeta', 'Gabigol']

  const handleParticipantAdd = () => {
    console.log("Você clicou no botão de Adicionar!")
  }

  const handleParticipantRemove = (name: string) => {
    console.log(`Você clicou em remover o participante ${name} !`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Terça, 12/12/2023</Text>
      <View style={styles.form}>
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

      <ScrollView showsVerticalScrollIndicator={false}>
      {
        participants.map((participant) => (
          <Participant
           key={participant}
           name={participant} 
           onRemove={() => handleParticipantRemove("Matheus")}
           />
        ))
      }
      </ScrollView>
    </View>
  );
};

export default Home;
