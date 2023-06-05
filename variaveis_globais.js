var versao = "D";

var simulaAjax = false;

var gUser = [];

var gMatricula = 0;

var oneSignalPlayerId = 0;

var gMapIsShow = false;

var gVersaoApi = "1.0.0";
var gVersaoTela = "P1.0.1";
var gVersaoApi = '242'
//var gVersaoApi = "1.1.16";
//var gVersaoTela = "V1.1.18 - Desenv";
var executionType = "prod";    

var chamadaDaNotificacao = false;  
var nomeDaNotificacao = "";


var ativList = [];
var searchStr = "";
var ativPars = [];
var listaTurmas = [];
var listaAtividades = [];

var gPrimeiraExecucao = false; 

var gFuncaoTela = "";
var gTurmaSelInd = "";

var gTokenApi = "";

var gScanning = false;

var gIDPedidoSelecionado = "";

var gLarguraTela = 0;
var gAlturaTela = 0;

var mdDone = false;

var gPedItemInd = 0;

let gAlgumItemRecebido = false;

let gOcorrencias = [];

let gAtendAndamento = false;

let gidOcorrencia = 0;
let gidOrdemServico = 0;
let gidEquipe = 0;

let gEnviar = [];

let gAtendMatUtil =[];
let gAtendServico = []; //

let gHolLoaded = false;

var temRede = false;
var habTimer = false;
var timerElapsed =0;
var vemDaGravAuto = false;
let user = "";
let senha = "";

const apiUrlProducao = 'https://zteam-tests/webrh/Gatway'

//const apiUrlProducao = 'https://webservice.pdcore.com.br/PDCoreWebService/EASWebservice.asmx?wsdl'
//apiUrlProducao: ' https://staging.urbamsjc.com.br/eletric