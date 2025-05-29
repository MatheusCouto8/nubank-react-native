import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, Modal, KeyboardAvoidingView, Platform } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function ConfirmacaoTransferencia() {
  const [valor, setValor] = useState("50,00");
  const [modalVisible, setModalVisible] = useState(false);
  const [novoValor, setNovoValor] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [msgModalVisible, setMsgModalVisible] = useState(false);

  const abrirEditarValor = () => {
    setNovoValor(valor);
    setModalVisible(true);
  };

  const confirmarNovoValor = () => {
    if (novoValor.trim() !== "") {
      setValor(novoValor);
    }
    setModalVisible(false);
  };

  const abrirEscreverMensagem = () => {
    setMsgModalVisible(true);
  };

  const confirmarMensagem = () => {
    setMsgModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#820AD1" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#222" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo */}
      <Text style={styles.title}>Transferindo</Text>
      <View style={styles.amountRow}>
        <Text style={styles.amount}>R$ {valor}</Text>
        <TouchableOpacity onPress={abrirEditarValor}>
          <MaterialCommunityIcons name="pencil-outline" size={20} color="#820AD1" style={{ marginLeft: 6 }} />
        </TouchableOpacity>
      </View>
      <Text style={styles.destinatario}>para <Text style={styles.destinatarioNome}>Laura</Text></Text>

      {/* Mensagem */}
      <TouchableOpacity style={styles.msgBox} onPress={abrirEscreverMensagem}>
        {mensagem ? (
          <Text style={styles.msgTextFilled}>{mensagem}</Text>
        ) : (
          <>
            <Ionicons name="chatbubble-outline" size={18} color="#820AD1" style={{ marginRight: 8 }} />
            <Text style={styles.msgText}>Escrever uma mensagem...</Text>
          </>
        )}
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

      {/* Botão de confirmar */}
      <TouchableOpacity style={styles.btnConfirmar}>
        <Text style={styles.btnConfirmarText}>Confirmar</Text>
      </TouchableOpacity>

      {/* Modal para editar valor */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.centeredView}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Editar valor</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.prefix}>R$</Text>
              <TextInput
                style={styles.inputValor}
                value={novoValor}
                onChangeText={setNovoValor}
                keyboardType="decimal-pad"
                autoFocus={true}
                selectionColor="#820AD1"
              />
            </View>
            
            <View style={styles.modalBtns}>
              <TouchableOpacity 
                style={[styles.modalBtn, styles.btnCancelar]} 
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.btnCancelarText}>Cancelar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.modalBtn, styles.btnSalvar]} 
                onPress={confirmarNovoValor}
              >
                <Text style={styles.btnSalvarText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* Modal para escrever mensagem */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={msgModalVisible}
        onRequestClose={() => setMsgModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.centeredView}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Escrever mensagem</Text>
            
            <View style={styles.inputContainerMsg}>
              <TextInput
                style={styles.inputMsg}
                value={mensagem}
                onChangeText={setMensagem}
                placeholder="Escreva sua mensagem..."
                placeholderTextColor="#999"
                multiline={true}
                maxLength={100}
                autoFocus={true}
                selectionColor="#820AD1"
              />
              <Text style={styles.charCount}>{mensagem.length}/100</Text>
            </View>
            
            <View style={styles.modalBtns}>
              <TouchableOpacity 
                style={[styles.modalBtn, styles.btnCancelar]} 
                onPress={() => setMsgModalVisible(false)}
              >
                <Text style={styles.btnCancelarText}>Cancelar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.modalBtn, styles.btnSalvar]} 
                onPress={confirmarMensagem}
              >
                <Text style={styles.btnSalvarText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
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
  msgTextFilled: {
    color: "#333",
    fontSize: 15,
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
  btnConfirmar: {
    backgroundColor: "#820AD1",
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  btnConfirmarText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  // Estilos para o modal
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    paddingBottom: Platform.OS === "ios" ? 40 : 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#820AD1",
    marginBottom: 24,
    paddingBottom: 8,
  },
  prefix: {
    fontSize: 24,
    color: "#333",
    marginRight: 4,
  },
  inputValor: {
    flex: 1,
    fontSize: 24,
    color: "#333",
    padding: 0,
  },
  inputContainerMsg: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 24,
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  inputMsg: {
    minHeight: 80,
    fontSize: 16,
    color: "#333",
    textAlignVertical: "top",
  },
  charCount: {
    fontSize: 12,
    color: "#999",
    alignSelf: "flex-end",
    marginTop: 4,
  },
  modalBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalBtn: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  btnCancelar: {
    backgroundColor: "#f2f2f2",
    marginRight: 8,
  },
  btnCancelarText: {
    color: "#333",
    fontWeight: "bold",
  },
  btnSalvar: {
    backgroundColor: "#820AD1",
    marginLeft: 8,
  },
  btnSalvarText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});