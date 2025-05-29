import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar, Alert, Platform, } from "react-native";
import axios from "axios";

export default function Login() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [loading, setLoading] = useState(false);

 const validarCpf = async () => {
  setLoading(true);
  const cpfLimpo = cpf.replace(/[^\d]/g, "");

  try {
    const response = await axios.get(
      `https://api.cpfhub.io/v1/validate/${cpfLimpo}`,
      {
        headers: {
          "x-api-key": "cc6ee1d1e6c5fbf26eeeec1ba724ef9697c6c9231fad334812c3f16e89be4dd7"
        }
      }
    );

    const { name } = response.data.data;

    if (name) {
      Alert.alert("CPF válido", `Nome: ${name}`);
    } else {
      Alert.alert("Erro", "CPF não encontrado ou dados incorretos.");
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    Alert.alert("Erro", "Não foi possível validar o CPF.");
  }

  setLoading(false);
};

  return (
    <View style={styles.gradientBg}>
      <StatusBar barStyle="light-content" backgroundColor="#820ad1" />
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nubank_logo_2021.svg/2560px-Nubank_logo_2021.svg.png",
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Nubank_Symbol_purple.svg",
          }}
          style={styles.nuSymbol}
          resizeMode="contain"
        />

        <TextInput
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor="#7c2ae8"
          keyboardType="numeric"
          value={cpf}
          onChangeText={setCpf}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Data de nascimento (DD/MM/AAAA)"
          placeholderTextColor="#7c2ae8"
          value={dataNascimento}
          onChangeText={setDataNascimento}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#7c2ae8"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={validarCpf}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "VALIDANDO..." : "ENTRAR"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>ESQUECI MINHA SENHA</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        © 2025 Nubank • Todos os direitos reservados
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBg: {
    flex: 1,
    backgroundColor: "#820ad1",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  card: {
    width: "90%",
    maxWidth: 370,
    backgroundColor: "#fff",
    borderRadius: 28,
    paddingVertical: 36,
    paddingHorizontal: 28,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: 0,
    marginTop: 10,
    alignSelf: "center",
  },
  nuSymbol: {
    width: 80,
    height: 54,
    marginBottom: 28,
    alignSelf: "center",
  },
  input: {
    width: "100%",
    height: 60,
    backgroundColor: "#f3eafe",
    borderRadius: 18,
    paddingHorizontal: 22,
    fontSize: 22,
    marginBottom: 18,
    color: "#4A148C",
    fontWeight: "bold",
    borderWidth: 1.5,
    borderColor: "#820ad1",
    ...Platform.select({
      ios: {
        shadowColor: "#820ad1",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#820ad1",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 12,
    shadowColor: "#820ad1",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  link: {
    color: "#820ad1",
    fontSize: 16,
    textDecorationLine: "underline",
    marginTop: 2,
    marginBottom: 2,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  footer: {
    color: "#fff",
    fontSize: 13,
    marginTop: 38,
    opacity: 0.7,
    textAlign: "center",
    letterSpacing: 0.5,
  },
});
