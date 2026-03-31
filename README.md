
# 🎬 Movie App - TVMaze API

Um aplicativo web moderno e responsivo para busca de filmes e séries, permitindo visualizar detalhes técnicos, sinopses e gerenciar uma lista de favoritos personalizada. Projeto desenvolvido como parte dos estudos de **Análise e Desenvolvimento de Sistemas (ADS)**.

---

## 🚀 Funcionalidades

* **Busca em Tempo Real:** Consumo da API pública do [TVMaze](https://www.tvmaze.com/api) para listar filmes e séries.
* **Página de Detalhes Dinâmica:** Exibição de capas, gêneros, notas (rating) e sinopses completas via parâmetros de URL (`URLSearchParams`).
* **Sistema de Favoritos:** Salve seus títulos preferidos em uma lista persistente.
* **Persistência de Dados:** Uso de `localStorage` para manter os dados salvos mesmo após recarregar a página.
* **Interface Dark Mode:** Design limpo e moderno inspirado em plataformas de streaming de alta performance.
* **Navegação Integrada:** Acesso aos detalhes do filme tanto pela busca quanto pela lista de favoritos.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica das páginas.
* **CSS3:** Estilização personalizada com **Grid Layout** e **Flexbox** para total responsividade.
* **JavaScript (ES6+):** * Manipulação dinâmica do DOM.
    * **Fetch API** para consumo de dados assíncronos (`async/await`).
    * **LocalStorage** para persistência de estado.
    * Gerenciamento de rotas simples via Query Strings.
---
👨‍💻 Autor
Rafael Henrique

Estudante de Análise e Desenvolvimento de Sistemas (ADS).

Faculdade Senac PE - 3º Período.

---
## 📁 Estrutura do Projeto

```text
├── index.html          # Dashboard principal (Busca e Favoritos)
├── detalhes.html       # Visualização detalhada do título selecionado
├── style.css           # Identidade visual e layout responsivo
├── script.js           # Lógica da Home e controle de favoritos
└── detalhes.js         # Lógica de captura de ID e renderização de detalhes
