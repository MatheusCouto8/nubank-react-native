import React from "react";
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const frequentContacts = [
  { id: "1", initials: "LP", name: "Laura", color: "#F3E6FA" },
  { id: "2", initials: "MF", name: "Marlon", color: "#F6E7F9" },
  { id: "3", initials: "AP", name: "ALICE", color: "#E6F6F3" },
];

const allContacts = [
  { id: "4", initials: "CP", name: "Clara" },
  { id: "5", initials: "JS", name: "João Silva" },
  { id: "6", initials: "RM", name: "Roberto Martins" },
  { id: "7", initials: "AM", name: "Ana Maria" },
  { id: "8", initials: "FG", name: "Fernanda Gomes" },
  { id: "9", initials: "LC", name: "Lucas Costa" },
  { id: "10", initials: "PR", name: "Paula Rocha" },
  { id: "11", initials: "TG", name: "Tiago Gomes" },
  { id: "12", initials: "RS", name: "Rafael Souza" },
  { id: "13", initials: "MC", name: "Mariana Cruz" },
];

export default function TransferScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#820AD1" barStyle="light-content" />
      {/* Header Roxo */}
      <View style={styles.headerBg}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={26} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Transferir</Text>
          <View style={{ width: 26 }} />
        </View>
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        <Text style={styles.title}>
          Para quem você quer transferir <Text style={styles.amount}>R$ 50,00</Text>?
        </Text>
        <Text style={styles.subtitle}>
          Encontre um contato na sua lista ou inicie uma <Text style={styles.bold}>nova transferência</Text>
        </Text>

        {/* Search Input */}
        <TextInput
          style={styles.input}
          placeholder="Nome, CPF/CNPJ ou chave Pix"
          placeholderTextColor="#B0B0B0"
        />

        {/* Frequent Contacts */}
        <Text style={styles.sectionTitle}>Contatos frequentes</Text>
        <View style={styles.frequentContacts}>
          {frequentContacts.map((item) => (
            <View key={item.id} style={[styles.contactCircle, { backgroundColor: item.color }]}>
              <Text style={styles.contactInitials}>{item.initials}</Text>
              <Text style={styles.contactName}>{item.name}</Text>
            </View>
          ))}
        </View>

        {/* All Contacts */}
        <Text style={styles.sectionTitle}>Todos os contatos</Text>
        <FlatList
          data={allContacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.contactRow} activeOpacity={0.7}>
              <View style={styles.contactCircleSmall}>
                <Text style={styles.contactInitialsSmall}>{item.initials}</Text>
              </View>
              <Text style={styles.contactRowName}>{item.name}</Text>
            </TouchableOpacity>
          )}
          style={{ marginTop: 8 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },
  headerBg: {
    backgroundColor: "#820AD1",
    paddingTop: 38,
    paddingBottom: 18,
    paddingHorizontal: 0,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    elevation: 6,
    shadowColor: "#820AD1",
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 0.5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 12,
  },
  title: {
    fontSize: 19,
    fontWeight: "700",
    color: "#222",
    marginBottom: 4,
    marginTop: 4,
  },
  amount: {
    color: "#820AD1",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#666",
    marginBottom: 18,
    fontSize: 15,
  },
  bold: {
    fontWeight: "bold",
    color: "#222",
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    marginBottom: 22,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#820AD1",
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontWeight: "bold",
    color: "#820AD1",
    marginTop: 18,
    marginBottom: 8,
    fontSize: 15,
    letterSpacing: 0.2,
  },
  frequentContacts: {
    flexDirection: "row",
    gap: 18,
    marginBottom: 10,
  },
  contactCircle: {
    alignItems: "center",
    marginRight: 16,
    width: 64,
  },
  contactInitials: {
    backgroundColor: "#FFF",
    borderRadius: 32,
    width: 48,
    height: 48,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#820AD1",
    marginBottom: 4,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    lineHeight: 48,
    shadowColor: "#820AD1",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  contactName: {
    fontSize: 12,
    color: "#444",
    textAlign: "center",
    fontWeight: "500",
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#F0F0F0",
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 8,
    elevation: 1,
    shadowColor: "#820AD1",
    shadowOpacity: 0.03,
    shadowRadius: 1,
  },
  contactCircleSmall: {
    backgroundColor: "#F3E6FA",
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#820AD1",
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  contactInitialsSmall: {
    fontWeight: "bold",
    color: "#820AD1",
    fontSize: 16,
  },
  contactRowName: {
    fontSize: 16,
    color: "#222",
    fontWeight: "500",
  },
});  