import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";
import Participant from "../../components/Participant";

import { styles } from "./styles";

const Home = () => {
 const [participants, setParticipants] = useState(['Matheus'])

  const handleParticipantAdd = () => {
    if(participants.includes("Roberto")) {
     return Alert.alert('Participante Existe', 'Já existe um participante na lista com esse nome.')
    }

    setParticipants([...participants, "Uolace"])

  }

  const handleParticipantRemove = (name: string) => {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
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

      <FlatList 
      data={participants}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Participant
           key={item}
           name={item} 
           onRemove={() => handleParticipantRemove(item)}
           />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Ninguém chegou no evento ainda ? Adicione participantes a sua lista de presença
        </Text>
      )}
      />
         
    </View>
  );
};

export default Home;
