async function carregarImagens() {
  const container = document.getElementById('gallery');

  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/photos');
    
    if (!resposta.ok) {
      throw new Error(`Erro ao buscar dados: ${resposta.status}`);
    }

    const dados = await resposta.json();
    const primeiros15 = dados.slice(0, 15); // do ID 1 ao 15

    primeiros15.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';

      const imagem = document.createElement('img');
      imagem.src = item.url;
      imagem.alt = item.title;

      const titulo = document.createElement('h3');
      titulo.textContent = item.title;

      card.appendChild(imagem);
      card.appendChild(titulo);
      container.appendChild(card);
    });

  } catch (erro) {
    console.error('Erro ao carregar as imagens:', erro);
    container.innerHTML = `<p style="color: red;">Erro ao carregar dados. Tente novamente mais tarde.</p>`;
  }
}

carregarImagens();
