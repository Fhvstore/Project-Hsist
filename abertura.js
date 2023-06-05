//TELA DE ABERTURA

/*function loadConfigs() {
            
           app.style.display = "block";
           currView="abertura";            
           login_Show();
           //menu_principal_Show();
            
        }

        function abertura_Show() {
            appBar.style.display = "none";
            abertura.style.display = "block";
            currView = "abertura";
            setTimeout(loadConfigs, 3000);
            showToast(gVersaoTela,2000);

        }*/

        function abertura_show() {
          
          if(gHolLoaded){
            trocaTela("lista_competencias")
          } else {
            trocaTela("abertura");
          
            // *** Tava errado aqui
            setTimeout(() => {
              login_Show();
            }, 3000);

          }
          
        }