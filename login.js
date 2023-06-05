

function login_Show() {
  //hideAppBar();

  /*loginTblLogo.style.width = screen.availWidth + "px";
    loginTblCampos.style.width = screen.availWidth + "px";
    loginTblBotao.style.width = screen.availWidth + "px";
    loginTblVersao.style.width = screen.availWidth + "px";
   */
  hideAppBar();
  loginVersaoApp.innerHTML = gVersaoTela;
  habTimer = false;
  loginUsuario.value = "71776834968";
  loginSenha.value="K3ORWF15"
  trocaTela("login");
}

function loginEntrar_click() {
  
 const url = 'https://zteam-tests.herokuapp.com/webrh/Login';

   // const url = 'http://127.0.0.1:3001/webrh/Login';

  const data = {
    usuario: loginUsuario.value,
    senha: loginSenha.value
  };

  doPost(url, JSON.stringify(data),
    function(retorno) {

      loginRet = JSON.parse(retorno)
      console.log(loginRet);

      if(loginRet.status=="0"){
        lista_holerite_Show();
        return
      } else {
        alerta("ATENÇÃO !!!",loginRet.mens,null) 
        return
      }

    });
}


function vaiParaOrdemServico() {
  localStorage.getItem("lastEquipe");
  gidEquipe = parseInt(lastEquipe);
  ordensServico_Show();
}

loginUsuario.onkeypress = (e) => {
  if (e.keyCode == 13) {
    loginSenha.focus();
  }
};

loginSenha.onkeypress = (e) => {
  if (e.keyCode == 13) {
    loginEntrar_click();
  }
};

function loginEye_click() {
  if (loginSenha.type == "password") {
    loginUsuario.type = "text";
  } else {
    loginSenha.type = "password";
  }
}
