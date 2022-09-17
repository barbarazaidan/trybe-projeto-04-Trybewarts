const email = document.getElementsByClassName('email');
const senha = document.getElementsByClassName('senha');
const botaoLogin = document.getElementsByClassName('botao-login');
const botaoEnviar = document.getElementById('submit-btn');
const chekcboxInfo = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const contador = document.getElementById('counter');

function validacaoLogin() {
  if (email[0].value === 'tryber@teste.com' && senha[0].value === '123456') {
    return true;
  } return false;
}

function enviarLogin() {
  const validacao = validacaoLogin();
  if (validacao === true) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function habilitarBotao() {
  if (chekcboxInfo.checked) {
    botaoEnviar.disabled = false;
  }
  // botaoEnviar.disabled = !checkboxInfo.checked; (outra opção)
}

function contadorCaracteres(evento) {
  const escrevendo = evento.target;
  const digitacao = escrevendo.value.length;
  console.log(digitacao);
  contador.innerText = textArea.getAttribute('maxlength') - digitacao;
}

botaoLogin[0].addEventListener('click', enviarLogin);
chekcboxInfo.addEventListener('change', habilitarBotao);
textArea.addEventListener('keyup', contadorCaracteres);
// quando usei o keydown, quando clicava no delete ele incrementava uma vez e depois ia decrementando a quantidade de caracteres, aí não dava certo. O keydown interfere no length, pois independente da tecla que eu digito, ele conta um caractere a mais ou a menos. Com o keyup, o length permanece igual para teclas como numlock, alt, shift, ctrl etc.
