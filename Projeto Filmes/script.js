let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

document.addEventListener("DOMContentLoaded", mostrarFavoritos);

document.getElementById("formBusca").addEventListener("submit", (e) => {
    e.preventDefault();
    buscar();
});

// FUNÇÃO DE HARDWARE: Vibração
function dispararFeedbackTatil() {
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

// FUNÇÃO DE UI: Criar Notificação Visual
function mostrarNotificacao(mensagem) {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    
    toast.className = "toast";
    toast.textContent = mensagem;
    
    container.appendChild(toast);
    
    // Remove o elemento do DOM após a animação de fadeOut terminar (3 segundos)
    setTimeout(() => {
        toast.remove();
    }, 3200);
}

async function buscar() {
    const termo = document.getElementById("buscar").value.trim();
    const div = document.getElementById("resultados");
    if (!termo) return;

    div.innerHTML = "<p>Buscando...</p>";

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${termo}`);
        const dados = await response.json();
        div.innerHTML = "";

        dados.forEach(item => {
            const show = item.show;
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <span>${show.name}</span>
                <button class="btn-detalhes" onclick="irParaDetalhes(${show.id})">Ver Detalhes</button>
                <button onclick="adicionarFavorito(${show.id}, '${show.name}')">Favoritar</button>
            `;
            div.appendChild(card);
        });
    } catch (e) { div.innerHTML = "<p>Erro na busca.</p>"; }
}

function irParaDetalhes(id) {
    window.location.href = `detalhes.html?id=${id}`;
}

function adicionarFavorito(id, nome) {
    if (!favoritos.some(f => f.id === id)) {
        favoritos.push({ id, nome });
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        
        dispararFeedbackTatil(); 
        mostrarNotificacao(`⭐ "${nome}" foi para os favoritos!`);
        
        mostrarFavoritos();
    }
}

function mostrarFavoritos() {
    const ul = document.getElementById("favoritos");
    ul.innerHTML = favoritos.length ? "" : "<li style='border:none; color:#666;'>Lista vazia.</li>";

    favoritos.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.nome}</span>
            <div class="fav-acoes">
                <button class="btn-fav-detalhes" onclick="irParaDetalhes(${item.id})">ℹ️ Detalhes</button>
                <button class="btn-remover" onclick="remover(${index})">✕</button>
            </div>
        `;
        ul.appendChild(li);
    });
}

function remover(index) {
    const nomeFilme = favoritos[index].nome;
    favoritos.splice(index, 1);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    
    dispararFeedbackTatil(); 
    mostrarNotificacao(`🗑️ "${nomeFilme}" removido.`);
    
    mostrarFavoritos();
}

// PWA Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(err => console.log(err));
    });
}