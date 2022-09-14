const email = document.getElementsByClassName('email');
const senha = document.getElementsByClassName('senha');
const botaoLogin = document.getElementsByClassName('botao-login');

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

botaoLogin[0].addEventListener('click', enviarLogin);
