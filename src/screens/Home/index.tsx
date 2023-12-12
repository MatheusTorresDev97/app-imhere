import { Text, TextInput, View } from "react-native";

import { styles } from "./styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Terça, 12/12/2023</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
      />
    </View>
  );
};

export default Home;
