
# 🎬 Movie App - TVMaze API (PWA)

Aplicativo web moderno para busca de filmes e séries, focado em alta usabilidade (UX), recursos nativos de hardware e design responsivo.

---

## 🚀 Funcionalidades
* **Busca em Tempo Real:** Consumo assíncrono da TVMaze API.
* **Página de Detalhes Dinâmica:** Informações completas via ID.
* **Sistema de Favoritos:** Lista salva com persistência em `localStorage`.
* **Sistema de Notificações (Toasts):** Feedback visual no canto da tela ao gerenciar favoritos.
* **Feedback Tátil (Hardware):** Vibração do dispositivo ao interagir com a lista.
* **PWA (Progressive Web App):** Instalável e com suporte offline básico.

---

## 🛠️ Tecnologias
* **HTML5 / CSS3:** Layout centralizado e animações de interface.
* **JavaScript (ES6+):** Async/Await, manipulação de DOM e **Vibration API**.
* **PWA:** Web App Manifest & Service Workers.

---

## 📝 Aprendizados Adquiridos
* **Multimodal Interaction:** Uso de múltiplos canais de feedback (visual e tátil).
* **Animações CSS:** Criação de componentes dinâmicos com transições de entrada e saída.
* **Arquitetura PWA:** Transformação de um site estático em uma aplicação instalável.

---

## 👨‍💻 Autor
### Rafael Henrique 

Estudante de ADS - Faculdade Senac PE - 3º Período. 
---
## 📁 Estrutura do Projeto

```text
├── index.html          # Dashboard principal (Busca e Favoritos)
├── detalhes.html       # Visualização detalhada do título selecionado
├── style.css           # Identidade visual, centralização e animações
├── script.js           # Lógica da Home, favoritos, notificações e vibração
├── detalhes.js         # Lógica de captura de ID e renderização de detalhes
├── manifest.json       # Configurações para instalação do PWA
└── sw.js               # Service Worker para cache e funcionamento offline

