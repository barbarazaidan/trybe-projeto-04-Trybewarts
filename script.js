const email = document.getElementsByClassName('email');
const senha = document.getElementsByClassName('senha');

const formularioPrincipal = document.getElementById('evaluation-form');
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const emailForm = document.getElementById('input-email');
const casa = document.getElementById('house');
const familia = document.getElementsByClassName('family');
const avaliacao = document.getElementsByClassName('avaliacao');
const materias = document.getElementsByClassName('subject');
const textArea = document.getElementById('textarea');

const botaoLogin = document.getElementsByClassName('botao-login');
const botaoEnviar = document.getElementById('submit-btn');
const chekcboxInfo = document.getElementById('agreement');
const contador = document.getElementById('counter');

const formularioSalvo = document.getElementById('form-data');
const nomeSalvo = document.getElementById('nome-salvo');
const emailSalvo = document.getElementById('email-salvo');
const casaSalva = document.getElementById('casa-salva');
const familiaSalva = document.getElementById('familia-salva');
const materiasSalvas = document.getElementById('materias-salvas');
const avaliacaoSalva = document.getElementById('avaliacao-salva');
const observacoesSalvas = document.getElementById('observacoes-salvas');

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

function selecionandoFamilia() {
  for (let index = 0; index < familia.length; index += 1) {
    if (familia[index].checked === true) {
      familiaSalva.innerHTML += ` ${familia[index].value}`;
    }
  }
}

function selecionandoMaterias() {
  const array = [];
  for (let index = 0; index < materias.length; index += 1) {
    if (materias[index].checked === true) {
      array.push(materias[index].value);
    }
  }
  materiasSalvas.innerHTML += `${array.join(', ')}`;
}

function selecionandoAvaliacao() {
  for (let index = 0; index < avaliacao.length; index += 1) {
    if (avaliacao[index].checked === true) {
      avaliacaoSalva.innerHTML += ` ${avaliacao[index].value}`;
    }
  }
}

function gerandoInfoSalvas() {
  nomeSalvo.innerHTML = `${nomeSalvo.innerHTML} ${nome.value} ${sobrenome.value}`;
  // o innerHTML aqui é para eu conseguir colocar na variável nomeSalvo as informções a seguir e o innerHtml depois da atriubuição é para eu pegar apenas o conteúdo que está na tag.
  emailSalvo.innerHTML += ` ${emailForm.value}`; // testei usando apenas o += para simplificar
  casaSalva.innerHTML += ` ${casa.value}`;
  selecionandoFamilia();
  selecionandoMaterias();
  selecionandoAvaliacao();
  observacoesSalvas.innerHTML += ` ${textArea.value}`;
}

function apareceInfoSalvas(evento) {
  evento.preventDefault();
  gerandoInfoSalvas();
  formularioPrincipal.style.display = 'none';
  formularioSalvo.style.display = 'block';
}

botaoLogin[0].addEventListener('click', enviarLogin);

chekcboxInfo.addEventListener('change', habilitarBotao);

textArea.addEventListener('keyup', contadorCaracteres);
// quando usei o keydown, quando clicava no delete ele incrementava uma vez e depois ia decrementando a quantidade de caracteres, aí não dava certo. O keydown interfere no length, pois independente da tecla que eu digito, ele conta um caractere a mais ou a menos. Com o keyup, o length permanece igual para teclas como numlock, alt, shift, ctrl etc.

botaoEnviar.addEventListener('click', apareceInfoSalvas);
