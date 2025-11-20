# IdeiaTech - Aplicativo de Gestão Inteligente de Equipes Híbridas

Aplicativo mobile desenvolvido em **React Native com TypeScript** integrado com backend Java Spring Boot, com foco em bem-estar de colaboradores, distribuição inteligente de tarefas e reconhecimento de competências.

## 📋 Visão Geral

**IdeiaTech** é uma solução inovadora que compreende o perfil e as habilidades de cada colaborador, detectando suas competências principais e nível de sobrecarga, para distribuir tarefas automaticamente de forma equilibrada, saudável e eficiente.

### Funcionalidades Principais

✅ **Autenticação Segura** — Login/Cadastro com validação robusta e JWT  
✅ **Dashboard de Bem-Estar** — Registro de humor, energia e foco  
✅ **Minhas Tarefas** — Visualização de tarefas atribuídas  
✅ **Minhas Habilidades** — Visualização de ferramentas e níveis de proficiência  
✅ **Recomendações Inteligentes** — Sugestões da IA do backend  
✅ **Feed de Feedbacks** — Espaço para reconhecimento e engajamento  
✅ **Inspiração Diária** — Frases motivacionais e reflexivas  
✅ **Sobre o App** — Descrição detalhada do projeto  
✅ **Tema Claro/Escuro** — Alternância de modo com persistência  

## 🛠 Tecnologias

- **React Native 0.72.4**
- **TypeScript 5.2.2**
- **Expo 49.0.12**
- **React Navigation 6.x** (Tabs + Stack)
- **Axios 1.6.0** (HTTP Client)
- **AsyncStorage** (Persistência local)
- **Formik + Yup** (Validação de formulários)
- **React Native Vector Icons** (Ícones)

## 📦 Estrutura do Projeto

```
ideiatech-app/
│
├── src/
│   ├── components/          
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── PasswordInput.tsx
│   │   ├── Card.tsx
│   │   ├── SkillBar.tsx
│   │   ├── MotivationalPhrase.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── Loader.tsx
│   │   └── index.ts
│   │
│   ├── screens/            
│   │   ├── LoginScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   ├── DashboardScreen.tsx
│   │   ├── TasksScreen.tsx
│   │   ├── SkillsScreen.tsx
│   │   ├── MotivationScreen.tsx
│   │   ├── FeedbackScreen.tsx
│   │   ├── AboutScreen.tsx
│   │   ├── RecommendationsScreen.tsx
│   │   └── index.ts
│   │
│   ├── services/            
│   │   ├── api/
│   │   │   ├── axiosClient.ts
│   │   │   ├── authApi.ts
│   │   │   ├── recomendacaoApi.ts
│   │   │   └── index.ts
│   │   ├── authService.ts  
│   │   ├── userDataService.ts
│   │   └── index.ts
│   │
│   ├── contexts/            
│   │   ├── ThemeContext.tsx
│   │   ├── AuthContext.tsx
│   │   ├── UserDataContext.tsx
│   │   ├── RecommendationContext.tsx
│   │   └── index.ts
│   │
│   ├── navigation/          
│   │   ├── AppNavigator.tsx
│   │   ├── MainTabNavigator.tsx
│   │   └── index.ts
│   │
│   ├── utils/              
│   │   ├── validators.ts
│   │   └── index.ts
│   │
│   ├── types/               
│   │   ├── User.ts
│   │   ├── Feedback.ts
│   │   └── index.ts
│   │
│   └── assets/             
│
├── App.tsx                
├── app.json                
├── tsconfig.json           
├── package.json             
├── .env                     
├── .gitignore               
└── README.md                
```

## 🚀 Como Começar

### Pré-requisitos

- Node.js 18+ e npm/yarn
- Expo CLI: `npm install -g expo-cli`
- Java 17+ e Maven (para backend, se necessário)
- Emulador Android/iOS ou dispositivo físico

### Instalação

1. **Clone o repositório:**
   ```
   git clone https://github.com/Global-Solution-Ideatec/GS-MOBILE
   cd ideiatech-app
   ```

2. **Instale as dependências:**
   ```
   npm install
   ```

3. **Configure o arquivo `.env`:**
   ```
   cp .env.example .env
   ```

   Edite `.env` com a URL do seu backend:
   ```
   REACT_APP_API_URL=http://localhost:8080/api
   REACT_APP_ENV=development
   ```

### Execução

#### No Expo Go (desenvolvimento rápido):
```
npm start
# Scan QR code com Expo Go no seu celular
```

#### Android (emulador ou físico):
```
npm run android
```

#### iOS (apenas macOS):
```
npm run ios
```

## 🔐 Integração com Backend

### Configuração de Autenticação JWT

O app está integrado com o backend Java Spring Boot que fornece:

1. **Login**: `POST /api/auth/login`
   - Body: `{ "email": "user@example.com", "password": "senha123" }`
   - Response: `{ "token": "jwt_token_here" }`

2. **Register**: `POST /api/auth/register`
   - Body: `{ "email": "user@example.com", "password": "senha123" }`
   - Response: `{ "message": "Usuário criado com sucesso" }`

3. **Recomendações**: `GET /api/recomendacao/colaborador?area=TI`
   - Header: `Authorization: Bearer <jwt_token>`
   - Response: Array de recomendações com scores

### Fluxo de Autenticação

```
1. Usuário faz login com email/senha
   ↓
2. AuthContext chama authApi.login()
   ↓
3. axiosClient intercepta e adiciona JWT ao header
   ↓
4. Token é salvo em AsyncStorage para persistência
   ↓
5. AppNavigator detecta usuário autenticado
   ↓
6. Navega para MainTabNavigator
   ↓
7. Endpoints protegidos usam JWT automaticamente
```


## 📱 Telas Disponíveis

| Tela | Descrição |  
|------|-----------|
| Login | Autenticação de usuários existentes |
| Cadastro | Registro de novo colaborador |
| Bem-estar | Dashboard com humor, energia, foco |
| Tarefas | Visualização de tarefas atribuídas | 
| Habilidades | Skills de escritório (read-only) |
| Recomendações | Sugestões inteligentes da IA | 
| Inspiração | Frases motivacionais |
| Feedback | Feed de reconhecimento e engajamento |
| Sobre | Descrição do projeto |

## 🔧 Build e Publicação

### Build APK (Android)

```
npm run build:android
```

Ou com EAS (recomendado):
```
eas build --platform android
```

### Distribuição Firebase App Distribution

1. Configure Firebase:
   ```
   firebase login
   firebase init
   ```

2. Publique:
   ```
   eas build --platform android && firebase appdistribution:distribute build.apk --release-notes="v1.0.0"
   ```


## 📖 Documentação Adicional

- [React Native Docs](https://reactnative.dev)
- [Expo Docs](https://docs.expo.dev)
- [React Navigation](https://reactnavigation.org)
- [Backend Java/Spring Boot](../GS---Java/README.md)


## ⚠️ Variáveis de Ambiente

Certifique-se de que `.env` está configurado corretamente:

```
# URL do Backend
REACT_APP_API_URL=http://localhost:8080/api

# Expiração JWT (em ms)
REACT_APP_JWT_EXPIRATION=3600000

# Ambiente
REACT_APP_ENV=development
```

## 📝 Licença

Este projeto é parte da *Global Solution 2025* (FIAP).

## 👨‍💻 Integrantes 

| Nome | RM |
|------|----|
| Carlos Eduardo Rodrigues Coelho Pacheco | 557323 |
| Pedro Augusto Costa Ladeira | 558514 |
| João Pedro Amorim Brito Virgesns | 559213 |

---


