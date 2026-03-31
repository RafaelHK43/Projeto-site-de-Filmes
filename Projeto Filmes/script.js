// Agora salvamos objetos {id, nome} nos favoritos
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

document.addEventListener("DOMContentLoaded", mostrarFavoritos);

document.getElementById("formBusca").addEventListener("submit", (e) => {
    e.preventDefault();
    buscar();
});

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
    favoritos.splice(index, 1);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    mostrarFavoritos();
}