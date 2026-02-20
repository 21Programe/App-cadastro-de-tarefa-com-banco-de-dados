# 📋 TaskManager Mobile - App de Cadastro de Tarefas

O **TaskManager Mobile** é uma aplicação robusta desenvolvida em **React Native** com foco na gestão e organização de tarefas diárias. O projeto permite que usuários realizem o controle completo (CRUD) de suas obrigações, oferecendo agilidade no fluxo de trabalho através de uma interface intuitiva e persistência de dados local.

## 🚀 Funcionalidades
- **Cadastro Dinâmico:** Inclusão de tarefas com descrição, data de término e nível de prioridade.
- **Gestão de Status:** Visualização em tempo real da lista de tarefas cadastradas.
- **Interatividade:** Funções integradas para atualização de status e remoção de itens diretamente da lista.
- **Persistência de Dados:** Integração com banco de dados local via módulo CRUD personalizado.

## 🛠️ Stack Tecnológica
- **Frontend:** React Native (Componentes de Classe e Hooks)
- **Banco de Dados:** SQLite / Persistência Local (Módulo `crud_nr`)
- **Estilização:** StyleSheet nativo para uma experiência mobile fluida.
- **Ambiente:** Expo / React Native CLI

## 🔐 Diferenciais de Segurança e Qualidade
Como estudante de **Segurança da Informação**, este projeto foi desenvolvido seguindo boas práticas de:
- **Separação de Preocupações (SoC):** Lógica de banco de dados isolada dos componentes de UI, facilitando a auditoria de código.
- **Sanitização de Inputs:** Tratamento básico de entradas de texto para prevenir erros de execução.
- **Organização de Repositório:** Configuração adequada de `.gitignore` para proteção de arquivos de ambiente e chaves de debug.

## 📦 Como rodar o projeto
1. Clone o repositório: `git clone https://github.com/21Programe/App-cadastro-de-tarefa-com-banco-de-dados.git`
2. Instale as dependências: `npm install` ou `yarn install`
3. Inicie o Metro Bundler: `npx react-native start`
4. Execute no emulador/dispositivo: `npx react-native run-android` ou `run-ios`