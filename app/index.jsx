import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar } from "react-native";

export default function Login() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#8A05BE" />
      <View style={styles.card}>
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Nubank_logo.png" }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Bem-vindo ao Nubank</Text>
        <Text style={styles.subtitle}>Acesse sua conta</Text>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor="#b39ddb"
          keyboardType="numeric"
          value={cpf}
          onChangeText={setCpf}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#b39ddb"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>© 2025 Nubank • Todos os direitos reservados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8A05BE",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 28,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 8,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
    marginTop: -32,
  },
  title: {
    color: "#8A05BE",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
  },
  subtitle: {
    color: "#4A148C",
    fontSize: 16,
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 48,
    backgroundColor: "#f3e6fa",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 14,
    color: "#4A148C",
    borderWidth: 1,
    borderColor: "#e1bee7",
  },
  button: {
    width: "100%",
    height: 48,
    backgroundColor: "#8A05BE",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 10,
    shadowColor: "#8A05BE",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    color: "#8A05BE",
    fontSize: 15,
    textDecorationLine: "underline",
    marginTop: 4,
    marginBottom: 4,
  },
  footer: {
    color: "#fff",
    fontSize: 13,
    marginTop: 32,
    opacity: 0.7,
    textAlign: "center",
  },
});