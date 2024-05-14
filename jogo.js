// jogo.js
let usuarioAtual;  // Adiciona uma variável para armazenar o usuário atual

function criarSala() {
  const codigoSala = gerarCodigoSala();
  const nomeUsuario = prompt("Digite seu nome:");

  usuarioAtual = {
    id: gerarCodigoUsuario(),
    nome: nomeUsuario,
  };

  const sala = {
    codigo: codigoSala,
    host: usuarioAtual,
    usuarios: [usuarioAtual],
  };
  salas.push(sala);

  exibirUsuarios(sala);
  iniciarContador(sala);
}

function entrarComCodigo() {
  const codigoDigitado = prompt("Digite o código da sala:");
  const salaExistente = salas.find(sala => sala.codigo === codigoDigitado);

  if (salaExistente) {
    const nomeUsuario = prompt("Digite seu nome:");

    usuarioAtual = {
      id: gerarCodigoUsuario(),
      nome: nomeUsuario,
    };
    salaExistente.usuarios.push(usuarioAtual);

    exibirUsuarios(salaExistente);
    iniciarContador(salaExistente);
  } else {
    alert("Sala não encontrada. Verifique o código e tente novamente.");
  }
}

function exibirUsuarios(sala) {
  document.getElementById('lobby').style.display = 'none';
  document.getElementById('entradaPagina').style.display = 'none';
  document.getElementById('sala').style.display = 'block';
  document.getElementById('codigoSala').innerText = sala.codigo;

  const listaUsuarios = sala.usuarios.map(usuario => `${usuario.nome} (ID: ${usuario.id})`).join('<br>');
  document.getElementById('listaUsuarios').innerHTML = listaUsuarios;
}

function iniciarContador(sala) {
  let contador = 0;

  setInterval(() => {
    document.getElementById('contadorPresentes').innerText = contador++;
  }, 1000);
}

// Restante do código...
