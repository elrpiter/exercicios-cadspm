const API_URL = "http://localhost:3000/usuarios";

// Carregar usuários
function carregarUsuarios() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const lista = document.getElementById('listaUsuarios');
      lista.innerHTML = '';

      data.forEach(usuario => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
          <td>${usuario.id}</td>
          <td>${usuario.nome}</td>
          <td>${usuario.idade}</td>
        `;
        lista.appendChild(linha);
      });
    });
}

// Adicionar usuário
const form = document.getElementById('formUsuario');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const idade = parseInt(document.getElementById('idade').value);

  const novoUsuario = {
    nome: nome,
    idade: idade
  };

  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(novoUsuario)
  })
  .then(res => res.json())
  .then(() => {
    form.reset();
    carregarUsuarios();
  });
});

// Inicializar
carregarUsuarios();
