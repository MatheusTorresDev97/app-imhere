import { Text, View } from "react-native";

import { styles } from "./styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Terça, 12/12/2023</Text>
    </View>
  );
};

export default Home;