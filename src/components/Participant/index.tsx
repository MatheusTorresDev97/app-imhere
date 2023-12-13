import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const Participant = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Matheus Torres
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
        -
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Participant;
