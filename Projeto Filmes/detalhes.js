async function carregar() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const container = document.getElementById("conteudo-detalhes");

    if (!id) return;

    try {
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const filme = await res.json();

        container.innerHTML = `
            <img src="${filme.image ? filme.image.medium : 'https://via.placeholder.com/210x295?text=Sem+Foto'}">
            <div class="info-filme">
                <h2>${filme.name}</h2>
                <p><strong>Gênero:</strong> ${filme.genres.join(", ") || "N/A"}</p>
                <div class="sinopse">${filme.summary || "Sem descrição disponível."}</div>
                <p><strong>Nota:</strong> ⭐ ${filme.rating.average || "N/A"}</p>
            </div>
        `;
    } catch (e) { container.innerHTML = "<p>Erro ao carregar detalhes.</p>"; }
}
carregar();