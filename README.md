# Nubank App Clone

Clone simplificado do app Nubank desenvolvido com React Native e Expo, focando na experiência de login e transferências.

## 🚀 Tecnologias Utilizadas

- React Native
- Expo
- Axios
- React Navigation 
- API REST local para contatos

## 📥 Instalação e Execução

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/nubank-react-native-1.git
cd nubank-react-native-1
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o arquivo da API em `app/profile.jsx`:
```javascript
const API_URL = "http://seu-ip:4000/contacts";
```

4. Inicie o projeto:
```bash
expo start
```

## 🎯 Decisões Técnicas

- **Expo**: Escolhido pela facilidade de configuração e desenvolvimento
- **Axios**: Utilizado para requisições HTTP pela simplicidade e confiabilidade
- **Context API**: Gerenciamento de estado global da aplicação
- **API Local**: Backend simplificado para simular integração com serviço de contatos

## 🔄 Dificuldades e Soluções

1. **Acesso à API Local**
   - Problema: Erro de conexão usando localhost no dispositivo físico
   - Solução: Uso do IP da máquina local para acesso à API

2. **Animações Fluidas**
   - Problema: Performance em dispositivos menos potentes
   - Solução: Uso de useNativeDriver nas animações

3. **Estilização Consistente**
   - Problema: Diferenças entre iOS e Android
   - Solução: Uso de Platform.select para estilos específicos

## 🔮 Melhorias Futuras

1. **Performance**
   - Implementar virtualização na lista de contatos
   - Otimizar carregamento de imagens
   - Cachear dados da API

2. **UI/UX**
   - Adicionar mais animações de transição
   - Implementar tema escuro
   - Melhorar feedback visual de loading

3. **Funcionalidades**
   - Adicionar autenticação real
   - Implementar mais funções do app original
   - Adicionar testes automatizados

4. **Infraestrutura**
   - Configurar CI/CD
   - Implementar monitoramento de erros
   - Melhorar documentação do código

## 📝 Estrutura do Projeto

```
nubank-react-native-1/
├── app/
│   ├── index.jsx        # Tela de login
│   ├── main.jsx         # Tela principal
│   └── profile.jsx      # Tela de transferência
├── components/          # Componentes reutilizáveis
├── contexts/           # Contextos da aplicação
└── services/          # Serviços e integrações
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.