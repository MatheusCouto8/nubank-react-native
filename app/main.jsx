import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { router } from "expo-router"; // Importando o router

export default function Home() {
  const [hideBalance, setHideBalance] = useState(false);

  const toggleHideBalance = () => {
    setHideBalance(!hideBalance);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#820AD1" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="person-circle-outline" size={36} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={toggleHideBalance}>
            <Feather 
              name={hideBalance ? "eye" : "eye-off"} 
              size={24} 
              color="#fff" 
              style={styles.icon} 
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="help-circle" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="mail-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.greeting}>Olá, Fulano</Text>
      </View>

      <TouchableOpacity style={styles.card} activeOpacity={0.7}>
        <Text style={styles.sectionTitle}>Conta</Text>
        <Text style={styles.balance}>
          {hideBalance ? "R$ ••••••" : "R$ 2.934,56"}
        </Text>
      </TouchableOpacity>

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
          <Feather name="arrow-down" size={22} color="#000" />
          <Text style={styles.actionText}>Receber</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.actionButton} 
          activeOpacity={0.7}
          onPress={() => router.push("/profile")}
        >
          <Feather name="arrow-up" size={22} color="#000" />
          <Text style={styles.actionText}>Transferir</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
          <Feather name="dollar-sign" size={22} color="#000" />
          <Text style={styles.actionText}>Pagar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.cardRounded} activeOpacity={0.7}>
        <Feather name="credit-card" size={24} color="#820AD1" />
        <Text style={styles.cardLabel}>Meus cartões</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} activeOpacity={0.7}>
        <View style={styles.cardHeader}>
          <Feather name="credit-card" size={20} color="#820AD1" />
          <Feather name="lock" size={16} color="#820AD1" style={{ marginLeft: 4 }} />
        </View>
        <Text style={styles.sectionSubtitle}>Cartão bloqueado</Text>
        <Text style={styles.sectionText}>
          Fatura atual: <Text style={{fontWeight: 'bold'}}>
            {hideBalance ? "R$ •••,••" : "R$ 789,00"}
          </Text>
        </Text>
        <View style={styles.divider} />
        <Text style={styles.sectionFooter}>
          Limite disponível de <Text style={{color: '#41C900'}}>
            {hideBalance ? "R$ •.•••,••" : "R$ 2.500,00"}
          </Text>
        </Text>
      </TouchableOpacity>
      
      <View style={{height: 30}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fff" 
  },
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
    gap: 20,
  },
  icon: { 
    marginRight: 0 
  },
  greeting: {
    color: "#fff",
    fontSize: 22,
    marginTop: 25,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 18,
    marginTop: 14,
    marginHorizontal: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  cardRounded: {
    backgroundColor: "#f9f9f9",
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    marginTop: 15,
    marginHorizontal: 20,
    borderRadius: 12,
    gap: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: "row", 
    alignItems: "center",
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 17,
    fontWeight: "500",
  },
  balance: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "#777",
    marginTop: 5,
  },
  sectionText: {
    marginTop: 16,
    fontSize: 16,
    color: "#333",
  },
  sectionFooter: {
    marginTop: 5,
    color: "#555",
    fontSize: 15,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 15,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 15,
  },
  actionButton: {
    backgroundColor: "#f9f9f9",
    height: 80,
    width: '30%',
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  actionText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  }
});