import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function ConfirmacaoTransferencia() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#820AD1" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={26} color="#222" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo */}
      <Text style={styles.title}>Transferindo</Text>
      <View style={styles.amountRow}>
        <Text style={styles.amount}>R$ 50,00</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="pencil-outline" size={20} color="#820AD1" style={{ marginLeft: 6 }} />
        </TouchableOpacity>
      </View>
      <Text style={styles.destinatario}>para <Text style={styles.destinatarioNome}>Laura</Text></Text>

      {/* Mensagem */}
      <TouchableOpacity style={styles.msgBox}>
        <Ionicons name="chatbubble-outline" size={18} color="#820AD1" style={{ marginRight: 8 }} />
        <Text style={styles.msgText}>Escrever uma mensagem...</Text>
      </TouchableOpacity>

      {/* Dados */}
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>CPF</Text>
        <Text style={styles.infoValue}>***.***.207-83</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Instituição</Text>
        <Text style={styles.infoValue}>NU PAGAMENTOS - IP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 48,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10,
    marginTop: 8,
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  amount: {
    fontSize: 32,
    color: "#820AD1",
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  destinatario: {
    color: "#222",
    fontSize: 15,
    marginBottom: 18,
    marginTop: 2,
  },
  destinatarioNome: {
    fontWeight: "bold",
    color: "#222",
  },
  msgBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F7FB",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  msgText: {
    color: "#820AD1",
    fontSize: 15,
    fontWeight: "500",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingVertical: 2,
  },
  infoLabel: {
    color: "#888",
    fontSize: 14,
  },
  infoValue: {
    color: "#222",
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 0.2,
  },
});