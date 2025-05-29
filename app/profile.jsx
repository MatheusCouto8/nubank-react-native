import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  StatusBar, 
  Alert 
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import axios from "axios";

export default function TransferScreen() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Navegar para a tela de transferência
  const navegarParaTransferencia = (nome) => {
    router.push({
      pathname: "/transferir",
      params: { destinatario: nome }
    });
  };

  // Buscar contatos da API
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/contacts");
        const contatosFormatados = response.data.map((item) => ({
          id: String(item.id),
          initials: gerarIniciais(item.nome),
          name: item.nome,
        }));
        setContacts(contatosFormatados);
      } catch (error) {
        console.error("Erro ao buscar contatos:", error);
        Alert.alert("Erro", "Não foi possível carregar os contatos.");
      }
    };

    fetchContacts();
  }, []);

  // Gerar iniciais do nome
  const gerarIniciais = (nome) => {
    const partes = nome.trim().split(" ");
    if (partes.length === 1) {
      return partes[0].substring(0, 2).toUpperCase();
    }
    return (partes[0][0] + partes[1][0]).toUpperCase();
  };

  // Filtro de busca
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#820AD1" barStyle="light-content" />
      <View style={styles.headerBg}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push("/main")}>
            <Ionicons name="arrow-back" size={26} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Transferir</Text>
          <View style={{ width: 26 }} />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          Para quem você quer transferir?
        </Text>
        <Text style={styles.subtitle}>
          Encontre um contato na sua lista ou inicie uma <Text style={styles.bold}>nova transferência</Text>
        </Text>

        <View style={styles.searchContainer}>
          <Feather name="search" size={18} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Nome, CPF/CNPJ ou chave Pix"
            placeholderTextColor="#B0B0B0"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          {searchTerm !== "" && (
            <TouchableOpacity onPress={() => setSearchTerm("")}>
              <Feather name="x-circle" size={18} color="#999" />
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.sectionTitle}>
          {searchTerm ? "Resultados" : "Todos os contatos"}
        </Text>
        
        {filteredContacts.length === 0 && searchTerm ? (
          <View style={styles.noResults}>
            <Text style={styles.noResultsText}>Nenhum contato encontrado</Text>
          </View>
        ) : (
          <FlatList
            data={searchTerm ? filteredContacts : contacts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.contactRow} 
                activeOpacity={0.7}
                onPress={() => navegarParaTransferencia(item.name)}
              >
                <View style={styles.contactCircleSmall}>
                  <Text style={styles.contactInitialsSmall}>{item.initials}</Text>
                </View>
                <Text style={styles.contactRowName}>{item.name}</Text>
              </TouchableOpacity>
            )}
            style={{ marginTop: 8 }}
            showsVerticalScrollIndicator={false}
          />
        )}
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
  subtitle: {
    color: "#666",
    marginBottom: 18,
    fontSize: 15,
  },
  bold: {
    fontWeight: "bold",
    color: "#222",
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#820AD1",
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 22,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    color: "#333",
  },
  sectionTitle: {
    fontWeight: "bold",
    color: "#820AD1",
    marginTop: 18,
    marginBottom: 8,
    fontSize: 15,
    letterSpacing: 0.2,
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
  noResults: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  noResultsText: {
    color: "#999",
    fontSize: 16,
  }
});
