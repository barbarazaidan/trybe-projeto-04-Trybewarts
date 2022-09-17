const email = document.getElementsByClassName('email');
const senha = document.getElementsByClassName('senha');
const botaoLogin = document.getElementsByClassName('botao-login');
const botaoEnviar = document.getElementById('submit-btn');
const chekcboxInfo = document.getElementById('agreement');

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

botaoLogin[0].addEventListener('click', enviarLogin);
chekcboxInfo.addEventListener('change', habilitarBotao);
