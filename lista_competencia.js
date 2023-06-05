function lista_holerite_Show() {
    configAppBarBasics("Selecione o recibo", "showBackButton");

    let comp =loginRet.competencias;
    let html =""

    for (let i = 0; i <= comp.length-1; i++) {

      ano = comp[i].ano
      mes = comp[i].mes;

      html = html + `<div class="listcard" style="display:flex;flex-direction:column;" onClick="competencia_Click(${i})">
                      <div class="botao-vazado">${mes}/${ano}</div>
                    </div>`;

      }
      
      listaCompetencias.innerHTML = html;
        
      trocaTela("lista_competencias");
}

function competencia_Click(ind){
  const url = 'https://zteam-tests.herokuapp.com/webrh/GetRecibo';

  let comp = loginRet.competencias[ind]

  mes = loginRet.competencias[ind].mes
  ano = loginRet.competencias[ind].ano

  const data = {
    "idempresa":loginRet.empresa,
    "idfunc":loginRet.idfunc,
    "idpessoa":loginRet.idpessoa,
    "tpproc":"FP",
    "mes":mes,
    "ano":ano
  }

  doPost(url, JSON.stringify(data),
  function(retorno) {

    pdfRet = JSON.parse(retorno)

    if(pdfRet.status=="0"){
      
      b64 = pdfRet.pdfbase64

      gHolLoaded = true;
      pdffile.href =  'data:application/pdf;base64,' + b64;
      pdffile.download = `recibo${mes}${ano}.pdf`
      pdffile.click();      
      
      return
    } else {
      alerta("ATENÇÃO !!!",pdfRet.mens,null) 
      return
    }

  });


}