import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={32} color="#fff" />
        <View style={styles.headerIcons}>
          <Feather name="eye-off" size={22} color="#fff" style={styles.icon} />
          <Feather name="help-circle" size={22} color="#fff" style={styles.icon} />
          <MaterialIcons name="mail-outline" size={22} color="#fff" />
        </View>
        <Text style={styles.greeting}>Olá, Nome</Text>
      </View>

     
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    backgroundColor: "#820AD1",
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  headerIcons: {
    flexDirection: "row",
    position: "absolute",
    right: 20,
    top: 60,
    gap: 15,
  },
  icon: { marginRight: 10 },
  greeting: {
    color: "#fff",
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
  },

 
});