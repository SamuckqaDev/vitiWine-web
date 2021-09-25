//Simular back-end para validaão;
const data = {
  name: "samuel",
  cnpj: 77217777000121,
  senha: "1234",
};

function makeValidate() {
  if ( ((ipt_user.value == data.name) || (ipt_user.value == data.cnpj))  && (ipt_password.value == data.senha))
  {
    window.location.href = "../pages/profile.html";
  } else {
    alert("Usuário ou senha incorretos, verfique por gentileza !");
  }

}
